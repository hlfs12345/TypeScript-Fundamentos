enum Mes{
    JAN = "Janeiro",
    FEV = "Fevereiro",
    MAR = "Março",
    ABR = "Abril"
};

console.log(Mes);
console.log(Mes.JAN);

const pessoa : {nome: string, mesAniv : string} = {
    nome : "Lucas",
    mesAniv : Mes.FEV
};

if(pessoa.mesAniv === Mes.FEV){
    console.log(pessoa);
};