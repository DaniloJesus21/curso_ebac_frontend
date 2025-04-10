function Pessoa(nome) {
  this.nome = nome
}

function Roupa(nome, modelo, tamanho, preco) {
  this.modelo = modelo
  this.tamanho = tamanho
  let _preco = preco
  
  this.getPreco = () => {
    return _preco
  }
  
  this.setPreco = (valor) => {
    if (typeof valor === 'number') {
      _preco = valor
    }
  }

  Pessoa.call(this, nome)
}

function Novo(nome, modelo, tamanho, preco) {
  Roupa.call(this, nome, modelo, tamanho, preco)

  this.aumento = () => {
    const novoPreco = Number((this.getPreco() * 1.05).toFixed(2))
    this.setPreco(novoPreco) 
  }
}

function Usado(nome, modelo, tamanho, preco) {
  Roupa.call(this, nome, modelo, tamanho, preco)

  this.desconto = () => {
    const novoPreco = Number((this.getPreco() / 1.10).toFixed(2))
    this.setPreco(novoPreco) 
  }
}

const pessoa1 = new Novo('Pedro','camisa', 'gg', 79.99)
const pessoa2 = new Usado('Maria', 'calça', 'm', 25.00);
const pessoa3 = new Novo('Gabriel', 'bermuda', 'g', 38.50);
const pessoa4 = new Usado('Maria', 'regata', 'p', 19.99);


