import database from '../Repository/connection.js'

async function createProduct(name, provider, category, composition, unityPrice, actualQtd, minQtd, maxQtd){
    const sql = 'insert into produto(nome_produto, FK_id_fornecedor, categoria_produto, composicao_produto, preco_unitario, quantidade_produto, quantidade_minima, quantidade_maxima) values(?,?,?,?,?,?,?,?)'
    
    const data = [name, provider, category, composition, unityPrice, actualQtd, minQtd, maxQtd]

    const conn = await database.connect()
    conn.query(sql,data)
    conn.end()
}

export default {createProduct}