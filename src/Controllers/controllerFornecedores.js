import express, {application, response} from "express";

import service from '../Services/serviceFornecedores.js';

const routes = express.Router();

routes.post("/", async (request, response) => {
    const {corporateName, email, contact, phone, cnpj, adress, stateInsc, productLine} = request.body;

    await service.createProvider(corporateName, email, contact, phone, cnpj, adress, stateInsc, productLine);

    response.status(200).send("Successful registration!")
})

export default routes;