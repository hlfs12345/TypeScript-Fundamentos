class Pessoa{
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    comer(comida: string){
        return `O ${this.nome} comeu ${comida}.`;
    }

    fezAniversario(){
        return `O ${this.nome} fez ${++this.idade} anos.`
    }
}

const pessoa1 = new Pessoa("Lucas",29);

console.log(pessoa1.comer("lanche"));
console.log(pessoa1.fezAniversario());



