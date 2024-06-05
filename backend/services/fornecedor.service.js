const fornecedormodel = require("../models/fornecedores.models");

let fornecedores = [
  {
    id: 0,
    nome: "Heineken",
    area_atuacao: "Tecnologia da informação",
    cnpj: "12.345.678/0001-00",
  },
  {
    id: 1,
    nome: "Great",
    area_atuacao: "Tecnologia da informação",
    cnpj: "12.345.678/0002-00",
  },
  {
    id: 2,
    nome: "Engenharia",
    area_atuacao: "Tecnologia da informação",
    cnpj: "12.345.678/0003-00",
  },
];

let id = 3;

class Fornecedorservice {
  //listando os usuarios
  static list() {
    return fornecedores;
  }
  // registrando usuarios
  static register(data) {
    let fornecedor = new fornecedormodel(
      id++,
      data.nome,
      data.area_atuacao,
      data.cnpj
    );
    fornecedores.push(fornecedor);
    return fornecedor;
  }

  //atualizando
  static update(id, data) {
    for (let fornecedor of fornecedores) {
      if (fornecedor.id == id) {
        fornecedor.nome = data.nome;
        fornecedor.area_atuacao = data.area_atuacao;
        fornecedor.cnpj = data.cnpj;
        return fornecedor;
      }
    }
  }

  //deletando
  static delete(id) {
    for (let i = 0; i < fornecedores.length; ++i) {
      if (fornecedores[i].id == id) {
        fornecedores.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  // recuperando
  static retrieve(id) {
    const Id = fornecedores.find((fornecedor) => fornecedor.id == id);
    if (Id) {
      return Id;
    }
    return {};
  }
}

module.exports = Fornecedorservice;
