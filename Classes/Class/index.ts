class Pessoa{
    nome: string;
    idade: number;

    constructor(nome: string = "Padrão", idade: number = 0){
        this.nome = nome;
        this.idade = idade;
    }
};

const pessoa1 = new Pessoa("Lucas",29);
const pessoa2 = new Pessoa("Bruna", 27);
const pessoa3 = new Pessoa();

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);