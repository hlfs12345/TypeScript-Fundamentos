    //Public -> Protected -> Private

    abstract class Pessoa{
        protected nome: string = "";
        protected idade: number = 0;
    
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

        protected abstract profissao : string;
        public abstract qualSuaProfissao() : string;
        public abstract qualSeuSalario(valor: number) : number;
    }
    
    class Lucas extends Pessoa {
        protected profissao = "Programador";
        public qualSuaProfissao(): string {
        return this.profissao;
        }
        
        public qualSeuSalario(valor: number): number {
            return valor;
        }
        
        constructor (){
            super("Lucas", 29);
        }
    }   





    
    
    
    