let array1: [string, string, number, boolean] = ["Lucas Fernandes", "Teste", 123, true];

let array2: Array<string | number | boolean> = ["Lucas", "Fernandes", 321, false];

console.log(array1);
console.log(array2);

let obj1: {nome : string; sobrenome : string; idade: number; ok : boolean} = {nome: "Lucas", sobrenome: "Fernandes", idade: 29, ok: true};
let obj2: Array<{nome : string; sobrenome : string; idade: number; ok : boolean}> = [
    {nome: "Lucas", 
    sobrenome: "Fernandes", 
    idade: 29, 
    ok: true},    
];

console.log(obj1);
console.log(obj2);