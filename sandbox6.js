
const para = document.querySelector('p');
const para1 = document.querySelector('.error');
const para2 = document.querySelector('div.error');
const para3 = document.querySelector('body > h1')

console.log(para);
console.log(para1);
console.log(para2);
console.log(para3);

const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');
paras.forEach(para=>{
    console.log(para);
});
console.log(paras[2]);
console.log(errors);

//elemento por ID
const title=document.getElementById('page-title');
console.log(title);

//elemento por nombre de la clase
const errors1=document.getElementsByClassName('error');
console.log(errors1);
console.log(errors1[0]);
errors.forEach(error =>{
    console.log(error);
});

//elemento por el nombre del tag
const paras2 = document.getElementsByTagName('p');
console.log(paras2);
console.log(paras2[1]);
const para4 = document.querySelector('p');
console.log(para4.innerText);

//para4.innerText = 'tortugas ninjas';

const paras3 = document.querySelectorAll('p');
paras3.forEach(para2=>{
    console.log(para2.innerText);
    para2.innerText += ' nuevo texto';
});

const content = document.querySelector('.content');
console.log(content.innerHTML);
content.innerHTML += '<h2>this is a new h2</h2>';

const people = ['Mario','Luigi','Yoshi'];
people.forEach(person =>{
    content.innerHTML += `<p>${person}</p>`;
});

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.facebook.com.mx');
link.innerHTML='Facebook web';
const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class','success');
mssg.setAttribute('style','color:green;');

const title3 = document.querySelector('h3');
title3.setAttribute('style','margin: 50px;');
console.log(title3.style);
console.log(title3.style.color);
title3.style.margin='50px';
title3.style.color = 'crimson';
title3.style.fontSize = ' 60px';
title3.style.margon = '50px';

const content3=document.querySelector('p')
console.log(content3.classList);
content.classList.add('error');
//content.classList.remove('error');
content.classList.add('success');
const paras4 = document.querySelectorAll('p');
//paras4.forEach(p =>{
//    console.log(p.innerText)
//})
paras4.forEach(p =>{
   if(p.textContent.includes('error')){
       p.classList.add('error');
   }
   if(p.innerText.includes('success')){
       p.classList.add('success')
   }
});
const title1=document.querySelector('.title');
title1.classList.toggle('test');
title1.classList.toggle('test');