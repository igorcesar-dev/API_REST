import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './src/database';

import express from 'express';
import userRoutes from './src/routes/userRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import fotoRoutes from './src/routes/fotoRoutes';

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
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  // Método para configurar rotas;
  routes() {
    this.app.use('/users/', userRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app; // Exportação de uma instância app (única para toda a aplicação);
