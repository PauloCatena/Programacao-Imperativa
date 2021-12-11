function aluno (nomeAluno, faltasAluno, notasAluno){
    this.nome = nomeAluno,
    this.qtdFaltas = faltasAluno,
    this.notas = notasAluno,
    this.calcularMedia = ()=>{
        somaNotas += 0
        this.notas.array.forEach( nota => {
            somaNotas += nota;            
        });
        let qntNotas = this.notas.lenght;
        return somaNotas/qntNotas;
    },
    this.faltas = ()=>{
        this.qtdFaltas +=1
        return this.qtdFaltas
    }
}

module.exports = aluno;