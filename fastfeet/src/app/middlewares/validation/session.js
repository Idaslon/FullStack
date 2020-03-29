import * as Yup from 'yup';

export default async (req, res, next) => {
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const validSchema = await schema.isValid(req.body);

  if (!validSchema) {
    return res.status(400).json({ error: 'Validation fails.' });
  }

  return next();
};
