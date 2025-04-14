const alunos = [
  {nome: 'João', nota: 7.0},
  {nome: 'Maria', nota: 4.0},
  {nome: 'Paula', nota: 9.0},
  {nome: 'Lucas', nota: 7.5},
  {nome: 'Laura', nota: 5.0}
]

function alunosAprovados () {
  const media = 6.0

  alunos.forEach(aluno => {
    if (aluno.nota >= media) {
      console.log(`${aluno.nome} está acima da média com nota ${aluno.nota}`);
    }
  });
}

alunosAprovados()
