//declaracion de funcion
function greet() {
    console.log('hola todos')   
}
greet();

//exprecion de funcion
const speak = function(name='mario',time='dia' ){
    console.log(`Buen ${time} ${name}`)
}

speak('mario,tiro');
speak();
speak('golpe, fred');

//funcion regular
const calcArea1 = function(radius1){
    let area = 3.14*radius1**2;
    return 3.14*radius1**2;
    return area1;
    console.log(area1); 
}
calcArea1(5); 
const area1 = calcArea1(5);
console.log(area1);

//funcion de flecha
const calcArea2=radius2=>3.14*radius2**2;
const area2 = calcArea2(5);
console.log('el area es', area2);

const greet2 = () => 'hola mundo'
const result = greet2();
console.log(result);

const bill = function(products,tax){
    let total = 0;
    for(let i = 0; i< products.length; i++){
        total += products [i]+products[i]*tax;
    }
    return total;
}
console.log(bill([10,15,30],0.2));

const bill2 =  (products2,tax2)=>{
    let total2 = 0;
    for(let i = 0; i< products2.length; i++){
        total2 += products2[i]+products2[i]*tax2;
    }
    return total2; 
}
console.log(bill2([10,15,30],0.2));

const name = 'garen';

//funciones
const greet3 =()=>'hola';
let resultOne = greet3();
console.log(resultOne);

//metodos
let resultTwo = name.toUpperCase();//cambia las minusculas a mayusculas
console.log(resultTwo);

const myFunc = (callbackFunc)=>{
    let value = 50;
    callbackFunc(value);
};
myFunc(function(value){
    console.log(value);
});

let people = ['mario','juan','luis','mariano','fred'];
people.forEach(function(person){
    console.log(person);
});

people.forEach((person,index)=>{
    console.log(index,person);
});

const logPerson=(person,index)=>{
    console.log(`${index} - hola ${person}`);
};
people.forEach(logPerson);
const ul=document.querySelector('.people')
const people2 = ['mario','juan','luis','mariano','fred'];
let html=``;
people2.forEach(function(person2){
    html+=`<li style="color: purple"> ${person2}</li>`
});
console.log(html);
ul.innerHTML=html;