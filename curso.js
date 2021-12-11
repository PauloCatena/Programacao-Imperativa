import dados from `.module/estudante`;

let curso = {
    nomeCurso: "Full Stack Developer",
    notaAprovacao: 6,
    faltaMaxima: 5,
    listaEstudantes: [],
    adicionarAluno: function(a){
        this.listaEstudantes.push(a);
        return true;
    },
    alunoAprovado: function(aluno){
        let qntFaltas = aluno.qntFaltas;
        let mediaAluno = aluno.calcularMedia();

        if((mediaAluno >= this.notaAprovacao) && (qntFaltas < this.faltasMaxima)){
            return true;
        }
        else if(qntFaltas == this.faltasMaxima) {
                if(mediaAluno >=(this.notaAprovacao/10)+this.notaAprovacao){
            return true
        }
        else{
            return false
        }
    }
        else {
            return false
        }  
},
    situacaoAlunos: () => {
        let situacaoAlunos = [];
        curso.listaEstudantes.forEach(e => {
        situacaoAlunos.push(curso.alunoAprovado(e))
    });

        return situacaoAlunos;
}
};

    dados.forEach(aluno=>{
    curso.adicionarAluno(aluno);
});
