import database from '../Repository/connection.js'

async function createProduct(name, provider, category, composition, unityPrice, actualQtd, minQtd, maxQtd){
    const sql = 'insert into produto(nome_produto, FK_id_fornecedor, categoria_produto, composicao_produto, preco_unitario, quantidade_produto, quantidade_minima, quantidade_maxima) values(?,?,?,?,?,?,?,?)'
    
    const data = [name, provider, category, composition, unityPrice, actualQtd, minQtd, maxQtd]

    const conn = await database.connect()
    conn.query(sql,data)
    conn.end()
}

async function updateProduct(name, provider, category, composition, unityPrice, actualQtd, minQtd, maxQtd, id){
    const sql = 'update produto set nome_produto = ?, FK_id_fornecedor = ?, categoria_produto = ?, composicao_produto = ?, preco_unitario = ?, quantidade_produto = ?, quantidade_minima = ?, quantidade_maxima = ? where id_produto = ?'

    const data = [name, provider, category, composition, unityPrice, actualQtd, minQtd, maxQtd, id]

    const conn = await database.connect()
    conn.query(sql,data)
    conn.end()

}

export default {createProduct, updateProduct}