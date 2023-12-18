const fn = (nome: string, idade? : number) => {
    if(!idade){
        return `nome: ${nome}, idade não definida`;    
    }
    return `nome: ${nome}, idade: ${idade}`;
};
console.log(fn("Lucas", 29));
console.log(fn("Lucas"));

const pessoa: {nome: string, idade?: number} = {nome: "Lucas"};