import * as Yup from 'yup';

export default async (req, res, next) => {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    street: Yup.string().required(),
    complement: Yup.string().required(),
    state: Yup.string().required(),
    city: Yup.string().required(),
    zip_code: Yup.number().integer().required(),
    number: Yup.number().integer().required(),
  });

  const validSchema = await schema.isValid(req.body);

  if (!validSchema) {
    return res.status(400).json({ error: 'Validation fails' });
  }

  return next();
};
