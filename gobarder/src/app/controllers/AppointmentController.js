import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Appointment from '../models/Appointment';
import User from '../models/User';
import File from '../models/File';

import Notitication from '../schemas/Notification';

class AppointmentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const appointments = await Appointment.findAll({
      where: { user_id: req.userId, canceled_at: null },
      order: ['date'],
      attributes: ['id', 'date'],
      offset: (page - 1) * 20,
      limit: 20,
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
      ],
    });

    return res.json(appointments);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      date: Yup.date().required(),
      provider_id: Yup.number().integer().required(),
    });

    const validSchema = await schema.isValid(req.body);

    if (!validSchema) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { date, provider_id } = req.body;

    const provider = await User.findOne({
      where: { id: provider_id, provider: true },
    });

    if (!provider) {
      return res
        .status(401)
        .json({ error: 'You can only create appointments with providers' });
    }

    if (provider_id === req.userId) {
      return res
        .status(400)
        .json({ error: 'You can not create a appointment with yourself' });
    }

    const startHour = startOfHour(parseISO(date));

    if (isBefore(startHour, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    const scheduledAppointment = await Appointment.findOne({
      where: {
        provider_id,
        canceled_at: null,
        date: startHour,
      },
    });

    if (scheduledAppointment) {
      return res
        .status(400)
        .json({ error: 'Appointment date is not available' });
    }

    const appointment = await Appointment.create({
      user_id: req.userId,
      provider_id,
      date,
    });

    /*
     * Notify appointment provider
     */

    const user = await User.findByPk(req.userId);
    const formattedDate = format(startHour, "'dia' dd 'de' MMMM', às' Hmm'h'", {
      locale: pt,
    });

    await Notitication.create({
      content: `Novo agendamento de ${user.name} para o ${formattedDate}`,
      user: provider_id,
    });

    return res.json(appointment);
  }
}

export default new AppointmentController();
