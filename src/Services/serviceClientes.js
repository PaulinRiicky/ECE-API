import database from '../Repository/connection.js';

async function createCustomer(name, email, contact, phone, cellphone, cpf, cnpj, adress, stateInsc, paymentWay, actionLine){
    const sql = 'insert into clientes(nome_cliente, email_cliente, contato_cliente, telefone_cliente, celular_cliente, cpf_cliente, cnpj_cliente, endereco_cliente, inscricao_estadual, forma_pagamento, linha_atuacao) values (?,?,?,?,?,?,?,?,?,?,?)';

    const data = [name, email, contact, phone, cellphone, cpf, cnpj, adress, stateInsc, paymentWay, actionLine];

    const conn = await database.connect();
    conn.query(sql,data);
    conn.end();
}

async function updateCustomer(name, email, contact, phone, cellphone, cpf, cnpj, adress, stateInsc, paymentWay, actionLine, id){
    const sql = 'update clientes set nome_cliente = ?, email_cliente = ?, contato_cliente = ?, telefone_cliente = ?, celular_cliente = ?, cpf_cliente = ?, cnpj_cliente = ?, endereco_cliente = ?, inscricao_estadual = ?, forma_pagamento = ?, linha_atuacao = ? where id_cliente = ?';

    const data = [name, email, contact, phone, cellphone, cpf, cnpj, adress, stateInsc, paymentWay, actionLine, id];

    const conn = await database.connect();
    conn.query(sql,data);
    conn.end();
}

async function listCustomer(){
    const sql = 'select * from clientes';


    const conn = await database.connect();
    conn.query(sql);
    conn.end();
}

export default {createCustomer, updateCustomer};