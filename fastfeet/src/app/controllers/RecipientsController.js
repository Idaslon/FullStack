import Recipient from '../models/Recipient';

class RecipientsController {
  async store(req, res) {
    const recipient = await Recipient.create(req.body);

    return res.json(recipient);
  }
}

export default new RecipientsController();
