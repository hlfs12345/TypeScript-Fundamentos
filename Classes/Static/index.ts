class Utils{
    static combineObject(object : Array<{}>){
        return JSON.parse(JSON.stringify(Object.assign(object)));
    }
}

const utils = new Utils();

const tenis1: { tamanho: number; estoque: boolean } = {
    tamanho: 41,
    estoque: true,
};

const tenis2: { tamanho: number; estoque: boolean } = {
    tamanho: 43,
    estoque: false,
};

console.log(Utils.combineObject([tenis1, tenis2]));