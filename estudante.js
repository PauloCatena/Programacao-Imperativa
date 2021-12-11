let aluno = require('./aluno');

let exportAlunos = [];

exportAlunos.push(new aluno('Paulo Catena', 2, [8,6,9,10]));
exportAlunos.push(new aluno('Juliana Ruama', 0, [8,5,7,6]));
exportAlunos.push(new aluno('Joao Victor', 1, [7,8,8,10]));
exportAlunos.push(new aluno('Matheus Barreto', 0, [9,9,10,8]));
exportAlunos.push(new aluno('Rogerio', 2, [8,7,6,9]));
exportAlunos.push(new aluno('Guilherme Pereira', 3, [7,8,7,9]));

module.exports = exportAlunos
