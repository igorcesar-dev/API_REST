import User from '../models/User';

/* class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
} */

class UserController { // Definição da classe UserController;
  async create(req, res) { // Método index que lida com as requisições HTTP;
    const novoUser = await User.create({
      nome: 'Igor',
      email: 'igor@gmail.com',
      password: '123456',
    });
    res.json(novoUser);
  }
}

export default new UserController(); // Exportação de uma instância da classe UserController;
