import Recipient from '../models/Recipient';

export default async (req, res, next) => {
  const { state, city, number } = req.body;

  const recipient = await Recipient.findOne({
    where: { state, city, number },
  });

  if (recipient) {
    return res.status(400).json({ error: 'Recipient address already exists' });
  }

  return next();
};
