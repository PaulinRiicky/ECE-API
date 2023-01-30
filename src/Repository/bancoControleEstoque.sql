create database controle_estoques;

use controle_estoques;

#Razão social põe junto com o nome ou devo criar uma coluna para cada um?
#Por que "forma de pagamento" ja no cadastro do cliente?
#"Inscrição estadual" tem apenas números?
select * from clientes;
create table clientes(
	id_cliente int auto_increment primary key,
    nome_cliente varchar(100) not null,
    email_cliente varchar(50) not null,
    contato_cliente varchar(50) not null,
	telefone_cliente int not null,
    celular_cliente int not null,
    cpf_cliente varchar(20),
    cnpj_cliente varchar(20),
    endereco_cliente varchar(50)  not null,
    inscricao_estadual int,
    forma_pagamento enum('boleto','cartão','pix','dinheiro') not null,
	linha_atuacao varchar(50) not null,
    data_cadastro datetime default(now())
);

create table fornecedores(
	id_fornecedor int auto_increment primary key,
    razao_social varchar(100) not null,
    email_fornecedor varchar(50) not null,
    contato_fornecedor varchar(50) not null,
	telefone_fornecedor int not null,
	cnpj_fornecedor varchar(20),
    endereco_fornecedor varchar(50)  not null,
    inscricao_estadual int,
	linha_produto varchar(50) not null,
    data_cadastro datetime
);
select * from fornecedores;

#Não precisa por uma coluna para descrição do produto, uma para o prazo de entrega e outra para a forma de pagamento? 
create table produto(
	id_produto int auto_increment primary key not null,
    nome_produto varchar(50),
    FK_id_fornecedor int,
    categoria_produto varchar(50),
    composicao_produto enum('KG','ML','LT'),
    preco_unitario decimal,
    quantidade_produto int,
    quantidade_minima int,
	quantidade_maxima int,
    data_cadastro datetime,
    constraint FK_id_fornecedor foreign key(FK_id_fornecedor) references fornecedores(id_fornecedor)
);

#Qual seria a chave primaria da tabela de formulario de vendas?
#Uma venda precisa do ID?
create table formulario_vendas(
	id_venda int auto_increment primary key,
    email varchar(50) not null,
    telefone int not null,
    data_venda date not null,
    quantidade int not null,
    valor_unitario decimal not null,
    valor_total decimal not null,
    prazo_entrega date not null,
    #forma_entrega varchar(20) default 'Retirada',
    forma_pagamento enum('boleto','cartão','pix','dinheiro') not null,
    FK_id_forn int not null,
    FK_id_prod int not null, 
    FK_id_cli int not null,
	constraint FK_id_forn foreign key(FK_id_forn) references fornecedores(id_fornecedor),
    constraint FK_id_prod foreign key(FK_id_prod) references produto(id_produto),
    constraint FK_id_cli foreign key(FK_id_cli) references clientes(id_cliente)
);
select * from formulario_vendas;

create table formulario_compra(
	id_compra int auto_increment primary key,
	nome_comprador varchar(50) not null,
    contato int not null,
    prazo_pagamento date not null,
	data_compra date not null,
    quantidade int not null,
    valor_unitario decimal not null,
    valor_total decimal not null,
    prazo_entrega date not null,
    #forma_entrega varchar(20) default 'Retirada',
    forma_pagamento enum('boleto','cartão','pix','dinheiro') not null,
    FK_cod_forn int not null,
    FK_cod_prod int not null,
    constraint FK_cod_forn foreign key(FK_cod_forn) references fornecedores(id_fornecedor),
    constraint FK_cod_prod foreign key(FK_cod_prod) references clientes(id_cliente)
);
select * from formulario_compra;
drop table formulario_compra;
#Qual seria a chave primaria da tabela de cadastro de lojas?
create table cadastro_loja(
	id_loja int auto_increment primary key,
    nome_loja varchar(50) not null,
    razao_social varchar(50) not null,
    proprietario varchar(50) not null,
    ramo_atividade varchar(50) not null,
    nome_contato varchar(50) not null,
    telefone_contato int(10) not null,
    email varchar(50) not null,
    telefone int(10) not null,
    pais varchar(50) default 'Brasil',
    endereco varchar(50) not null,
    cidade varchar(20) not null,
    cep int not null
);
select * from cadastro_loja;

select fc.nome_comprador, p.nome_produto from formulario_compra fc inner join produto p on p.id_compra = fc.FK_cod_prod where p.id_produto = 1;
