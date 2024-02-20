import express from 'express';
import homeRoutes from './src/routes/homeRoutes';

class App { // Definição da classe App;
    
  // Construtor da classe App;
  constructor() {
    this.app = express(); // Criação de uma instância do app usando express;
    
    // Chamada dos métodos middlewares e routes durante a inicialização;
    this.middlewares();
    this.routes();
  }

  // Método para configurar middlewares;
  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  // Método para configurar rotas;
  routes() {
    this.app.use('/', homeRoutes);
  }
}

export default new App().app; // Exportação de uma instância app (única para toda a aplicação);
