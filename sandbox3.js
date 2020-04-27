//for loops 

for(let i = 0; i < 5; i++){
   console.log('in loop:', i); 
}
console.log('loop finished');



//while loop
const name = ['juan', 'luis', 'alan'];

let i =0;
while(i < name.length){
    console.log(name[i]);
    i++;
};

// do while loops
let c = 5;

do{
  console.log('valor de c es: ', c);
  c++;
} while(c < 5);



//if
const edad = 25;

if (edad> 20) {
 console.log ('tienes más de 20 años');
}

const lolito = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if (lolito.length> 3) {
console.log ("¡son muchos apodos de lolito!");
}

const contraseña = 'p@ssword';

if(contraseña.length>=8){
  console.log('esa contraseña es aceptable');
};

// else if statements
const password = 'p@ssword123456';

if(password.length >= 12){
  console.log('la contraseña es muy segura');
} else 
  if(password.length >= 8){
     console.log('la contraseña es aceptable');
}   else {
  console.log('la contraseña debe de tener mas de 8 letras');
}

// else if statements
const passwor = 'pass12';

if(passwor.length >= 12 && passwor.includes('@')){
  console.log('contraseña segura');
} else if(passwor.length >= 8 || passwor.includes('@') && passwor.length > 4){
  console.log('contraseña aceptable');
} else {
  console.log('contraseña insegura');
}

// Logical NOT
const user = false;
if(!user){
  // do something
  console.log('primero inicia sesion');
}

console.log(!true);
console.log(!false);


// break & continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){
  if(scores[i] === 0){
    continue;
  }
  console.log('tus puntos:', scores[i]);
  if(scores[i] === 100){
    console.log('felicidades, eres grande!');
    break;
  }
}

// switch statements
const grade = 'f';

switch(grade){
  case 'A':
    console.log('A!');
    break;
  case 'B':
    console.log('B!');
    break;
  case 'C':
    console.log('C!');
    break;
  case 'D':
    console.log('D!');
    break;
  case 'E':
    console.log('E!');
    break;
  default:
    console.log('no existe');
}

//using if statements
if(grade === 'A'){
  console.log('eres muy inteligente');
} else if(grade === 'B'){
  console.log('eres muy bueno');
} else if(grade === 'C'){
  console.log('tu puedes');
} else if(grade === 'D'){
  console.log('no te rindas campeon');
 } else if(grade === 'E'){
  console.log('ya ni que decirte');
 } else {
  console.log('ya mejor busca trabajo');
 }

// variables & block scope
let age = 30;
if(true){
  let age = 40;
  let name = 'juan';
  console.log('lista 1:', age, name);
  if(true){
    let age = 50;
    console.log('lista 2:', age, name);
  }
}
console.log('fuera de las listas:', age, name);


