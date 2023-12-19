export namespace Pessoa1{
    export let nome = "João";

    const valor = 1 + 1;

    export const calc = () =>{
        return valor;
    }
}

console.log(Pessoa1.nome);
console.log(Pessoa1.calc());