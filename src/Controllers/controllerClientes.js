import express, {application} from "express";
import service from '../Services/serviceClientes.js';

const routes = express.Router();

routes.post("/", async (request, response) => {
    const {name, email, contact, phone, cellphone, cpf, cnpj, adress, stateInsc, paymentWay, actionLine} = request.body;

    await service.createCustomer(name, email, contact, phone, cellphone, cpf, cnpj, adress, stateInsc, paymentWay, actionLine);

    response.status(200).send("Successful registration!")
})
/*
routes.get("/", async (request, response) => {
    const {} = request.body;
})
*/
routes.put("/", async (request, response) => {
    const { id, name, email, contact, phone, cellphone, cpf, cnpj, adress, stateInsc, paymentWay, actionLine } = request.body;

    await service.updateCustomer(id, name, email, contact, phone, cellphone, cpf, cnpj, adress, stateInsc, paymentWay, actionLine)

    response.status(200).send("Successful update!")
})

export default routes;