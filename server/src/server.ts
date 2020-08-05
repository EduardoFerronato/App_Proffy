import express from "express";

const app = express();

app.use(express.json());

//localhost:3333/users
//localhost:3333/contacts

//GET: buscar ou listar uma informação
//POST: criar alguma nova informação
//PUT: atualizar uma informação existente
//DELETE: deletar uma informação existente

//Corpo (request Body): dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginação, filtros, ordenação

app.get("/", (request, response) => {
  return response.json({ massage: "hello world" });
});

//localhost:3333

app.listen(3333);
