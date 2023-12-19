    //Public -> Protected -> Private

    class Pessoa{
        protected nome: string;
        protected idade: number;
    
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
    
class Lucas extends Pessoa {
    private _profissao: string = "Programador";
    
    constructor (){
        super("Lucas", 29);
    }

    get profissao() {
        if (this._profissao === "Piloto"){
            return `Ele não é mais programador, agora mudou para ${this._profissao}`;
        }
        return this._profissao;
    }

    set profissao(valor : string){
        this._profissao = valor;
    }

}

const lucas = new Lucas();
console.log(lucas.profissao);

lucas.profissao = "Piloto";

console.log(lucas.profissao);




    
    
    
    