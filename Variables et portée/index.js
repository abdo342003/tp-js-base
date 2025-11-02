//exo1 
var x = 5 ;
let y = 10 ; 
x=4;
y=4;


console.log(`------------------EXO2-------------------------------------------------------------------------`)



//exo2
function testScope(){
    if (true){
        var a = "var visible partout";
        let b = "let visible ici seulement";
    }
    console.log(a); // fonctionne
    //console.log(b); // erreur
}

testScope();

console.log(`---------------------------------EXO3----------------------------------------------------------`)

///exo 3
function sayHello(name){ //Supporte Hoisting
    return `Bonjour, ${name}`;
};

const sayHelloArrow = (name) => `Bonjour, ${name}`; //Ne Supporte pas Hoisting

console.log(sayHello("abdo"))
console.log(sayHelloArrow("abdellah"))

console.log(`---------------------------------EXO4----------------------------------------------------------`)

//exo 4
const person = {
    name :"Sara",
    sayHello: function(){
        console.log(`Bonjour, `+this.name);
    },
    sayHelloArrow: ()=>{
        console.log(`Bonjour `+ this.name);
        },
        
};
person.sayHello("Abdo");
person.sayHelloArrow("Abdo");
