interface IPessoa {
    nome: string,
    idade: number,
    readonly cpf: number,
    enabled(): boolean;
}

const pessoa : IPessoa = {
    nome: "Lucas", 
    idade:29, 
    cpf: 1524638974, 
    enabled: () => {
        return true;
    },
};

class Joao implements IPessoa{
    nome: string = "João";
    idade: number = 22;
    readonly cpf : number = 1111;
    enabled(): boolean {
        return true;
    };
}
