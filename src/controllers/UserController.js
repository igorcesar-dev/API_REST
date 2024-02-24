import User from '../models/User';

class UserController { // Definição da classe UserController;
  async create(req, res) { // Método index que lida com as requisições HTTP;
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController(); // Exportação de uma instância da classe UserController;
