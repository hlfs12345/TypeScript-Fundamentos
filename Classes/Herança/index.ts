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
    private profissao: string = "Programador";
    
    constructor (){
        super("Lucas", 29);
    }

    public getProfissao(){
        return `${this.nome} trabalha como ${this.profissao}.`;
    }

}

class Bruna extends Pessoa {

}

const lucas = new Lucas();
const bruna = new Bruna("Bruna", 27);


console.log(lucas.comer("Feijoada"));
console.log(lucas.fezAniversario());
console.log(lucas.getProfissao());

    
    
    
    