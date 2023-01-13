import express, {application} from "express";
import service from '../Services/serviceProdutos.js';

const routes = express.Router();

routes.post("/", async (request, response) => {
    const {name, provider, category, composition, unityPrice, actualQtd, minQtd, maxQtd} = request.body;

    await service.createProduct(name, provider, category, composition, unityPrice, actualQtd, minQtd, maxQtd);

    response.status(200).send("Successful registration!")
})

export default routes;