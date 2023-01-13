import database from '../Repository/connection.js';

async function createCustomer(name, email, contact, phone, cellphone, cpf, cnpj, adress, stateInsc, paymentWay, actionLine){
    const sql = 'insert into clientes(nome_cliente, email_cliente, contato_cliente, telefone_cliente, celular_cliente, cpf_cliente, cnpj_cliente, endereco_cliente, inscricao_estadual, forma_pagamento, linha_atuacao) values (?,?,?,?,?,?,?,?,?,?,?)';

    const data = [name, email, contact, phone, cellphone, cpf, cnpj, adress, stateInsc, paymentWay, actionLine];

    const conn = await database.connect();
    conn.query(sql,data);
    conn.end();
}

export default {createCustomer};