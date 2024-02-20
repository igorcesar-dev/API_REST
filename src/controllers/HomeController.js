class HomeController { // Definição da classe HomeController;
  index(req, res) { // Método index que lida com as requisições HTTP;
    res.json({ // Envio de resposta JSON para o cliente;
      tudoCerto: true,
    });
  }
}

export default new HomeController(); // Exportação de uma instância da classe HomeController;
