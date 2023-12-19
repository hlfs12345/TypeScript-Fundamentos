    //Public -> Protected -> Private

class Pessoa{
    public nome: string;
    public idade: number;
    private _profissao: string = "Programador";

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string){
        return `O ${this.nome} comeu ${comida}.`;
    }

    public fezAniversario(){
        return `O ${this.nome} fez ${++this.idade} anos.`
    }
}

const pessoa1 = new Pessoa("Lucas",29);

console.log(pessoa1.comer("lanche"));
console.log(pessoa1.fezAniversario());



