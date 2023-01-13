import express, {application, response} from "express";

import service from '../Services/serviceLoja.js';

const routes = express.Router();

routes.post("/", async (request, response) => {
    const {storeName, corporateName, owner, businessLine, contactName, contactPhone, email, phone, country, adress, city, cep} = request.body;

    await service.createStore(storeName, corporateName, owner, businessLine, contactName, contactPhone, email, phone, country, adress, city, cep);

    response.status(200).send("Successful registration!")
})

export default routes;