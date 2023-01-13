import database from '../Repository/connection.js';

async function createStore(storeName, corporateName, owner, businessLine, contactName, contactPhone, email, phone, country, adress, city, cep){
    const sql = 'insert into cadastro_loja(nome_loja, razao_social, proprietario, ramo_atividade, nome_contato, telefone_contato, email, telefone, pais, endereco, cidade, cep) values(?,?,?,?,?,?,?,?,?,?,?,?)';

    const data = [storeName, corporateName, owner, businessLine, contactName, contactPhone, email, phone, country, adress, city, cep];

    const conn = await database.connect();
    conn.query(sql, data);
    conn.end();
}

export default {createStore};