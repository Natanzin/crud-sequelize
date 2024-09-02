import ProdutoRepo from "../model/produtos.js"
import { Op } from "sequelize" //importante para operações futuras

//Retorna todos os valores 
export async function obterTotos() {
  return await ProdutoRepo.findAll()
}

//retorna um produto atraves do seu ID
export async function obterProduto(codigo) {
  return await ProdutoRepo.findByPk(codigo)
}

//cria um novo produto
export async function criarProduto(nome, quantidade) {
  const produto = await ProdutoRepo.create({
    nome: nome,
    quantidade: quantidade
  })
  return produto.codigo
}

//edita um produto já existente
export async function alterarProduto(codigo, nome, quantidade) {
  let produto = await ProdutoRepo.findByPk(codigo)
  produto.nome = nome
  produto.quantidade = quantidade
  return await produto.save()
}

//deleta um produto
export async function removerProduto(codigo) {
  let produto = await ProdutoRepo.findByPk(codigo)
  await produto.destroy()
}