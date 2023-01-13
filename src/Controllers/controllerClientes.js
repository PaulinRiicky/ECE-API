import express, {application} from "express";
import service from '../Services/serviceClientes.js';

const routes = express.Router();

routes.post("/", async (request, response) => {
    const {name, email, contact, phone, cellphone, cpf, cnpj, adress, stateInsc, paymentWay, actionLine} = request.body;

    await service.createCustomer(name, email, contact, phone, cellphone, cpf, cnpj, adress, stateInsc, paymentWay, actionLine);

    response.status(200).send("Successful registration!")
})

export default routes;