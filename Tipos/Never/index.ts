const error = (): never =>{
    throw new Error("Algo deu errado!");
};

const loop = (): never => {
    while(true){
        console.log("Olá");
    }
};

const validate = (value : string | number) => {
    if(typeof value === "string"){
        return console.log("É uma string");       
    }else if(typeof value === "number"){
        return console.log("É uma número")
    }
    console.log(error);  
};

validate(123);