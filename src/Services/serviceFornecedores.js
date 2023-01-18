import database from '../Repository/connection.js'

async function createProvider(corporateName, email, contact, phone, cnpj, adress, stateInsc, productLine){
    const sql = 'insert into fornecedores(razao_social, email_fornecedor, contato_fornecedor, telefone_fornecedor, cnpj_fornecedor, endereco_fornecedor, inscricao_estadual, linha_produto) values(?,?,?,?,?,?,?,?)'

    const data = [corporateName, email, contact, phone, cnpj, adress, stateInsc, productLine]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

async function updateProvider(corporateName, email, contact, phone, cnpj, adress, stateInsc, productLine, id){
    const sql = 'update fornecedores set razao_social = ?, email_fornecedor = ?, contato_fornecedor = ?, telefone_fornecedor = ?, cnpj_fornecedor = ?, endereco_fornecedor = ?, inscricao_estadual = ?, linha_produto = ? where id_fornacedor = ?'

    const data = [corporateName, email, contact, phone, cnpj, adress, stateInsc, productLine, id]

    const conn = await database.connect()
    conn.query(sql, data)
    conn.end()
}

export default {createProvider, updateProvider}