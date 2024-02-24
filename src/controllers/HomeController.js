import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Igor',
      sobrenome: 'César',
      email: 'igor@gmail.com',
      idade: 24,
      peso: 88,
      altura: 1.80,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
