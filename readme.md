# Crud com Sequelize

Exemplificação de um CRUD de produtos com Sequelize.

## Instruções

#### Clone o repositório
```
git clone https://github.com/Natanzin/crud-sequelize.git
```

#### Navegue até o diretório do projeto
```
cd nome-do-projeto
```
#### Instale as dependências
```
npm install
```
A pasta <b>node_modules</b> será baixada ao projeto com todos os arquivos necessários para a utilização das dependências.

## index.js
Ao abrir o arquivo index.js em seu editor de código de preferência, vai notar que as funções estão comentadas. É necessário descomentar e alterar os parâmetros das funções que deseja execultar.

### Listar totos os produtos
```
obterTotos().then((x) => console.log(JSON.stringify(x)))
```

### Listar produto a partir de um ID
```
obterProduto(codigo).then((x) => console.log(JSON.stringify(x)))
```
Você deve alterar o parâmetro da função obterProduto() de acordo com o código do produto que deseja visualizar. <br>
- codigo = integer

### Criar um novo produto
```
criarProduto("nome", quantidade).then((x) => console.log(`ID do produto criado: ${x}`))
```
Você deve alterar os parâmetros da função criarProduto() de acordo com as informações dos produtos que você deseja criar.<br>
- nome = string <br>
- quantidade = integer <br>

### Editar um produto
```
alterarProduto(codigo, "nome", quantidade).then((x) => console.log(JSON.stringify(x)))
```
Você deve alterar os parêmetros da função alterarProduto() de acordo com as informações do produto que você deseja alterar. <br>
- codigo = integer <br>
- nome = string <br>
- quantidade: integer

### Excluir um produto
```
removerProduto(codigo).then((x) => console.log("Produto removido"))
```
Você deve açterar o parâmetro da função removerProduto() de acordo com a informação do produto que você deseja excluir. <br>
- codigo = integer

## Considerações Finais

Meu intuito com esse repositório é adquirir conhecimento na criação de sistemas utilizando node.js <br><br>
Muito obrigado.<br>
Natanzin
