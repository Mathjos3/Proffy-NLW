import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

//GET: Busca ou lista uma informação
//POST: Criar alguma nova informação
//PUT: Atualiza alguma informação existente
//DELETE: Deletar uma informação existente

//Corpo (request, response): dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso atualizar ou deletar
//Query Params: Paginação, filtros, ordenação
