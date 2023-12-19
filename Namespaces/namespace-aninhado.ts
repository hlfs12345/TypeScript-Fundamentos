export namespace Pessoa{
    export namespace Joao {
        export let nome = "João";

        const valor = 1 + 1;

        export const calc = () =>{
            return valor;
        };
    }

    export namespace Maria {
        export let nome = "Maria";

        const valor = 1 + 1;

        export const calc = () =>{
            return valor;
        };
    }
}

console.log(Pessoa.Joao.nome);
console.log(Pessoa.Maria.nome);