import { obterTotos, obterProduto, alterarProduto, criarProduto, removerProduto } from "./data/controller/produtos.js"

//retorna todos os valores
//obterTotos().then((x) => console.log(JSON.stringify(x)))

//retorna apenas um produto através do seu código
//obterProduto(9).then((x) => console.log(JSON.stringify(x)))

//cria um novo produto
//criarProduto("carambola", 1458).then((x) => console.log(`ID do produto criado: ${x}`))

//editar um produto
//alterarProduto(9, "Carambola", "1458").then((x) => console.log(JSON.stringify(x)))

//excluir um produto
//removerProduto(9).then((x) => console.log("Produto removido"))