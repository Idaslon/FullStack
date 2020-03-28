import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    console.log(`email${email}`);

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not exists.' });
    }

    return res.json(user);
  }
}

export default new SessionController();
