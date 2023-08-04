const reviews=[{
    id:0,
    name:'Katherine Lanford',
    role:'Web Developer',
    img:'1.jpg',
    text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa amet sint quasi fuga tempore ea! Nam id fugit mollitia, dolores dolore neque laboriosam itaque a atque. Eum distinctio vitae consequatur?'

},
{
    id:1,
    name:'Selena Gomez',
    role:'BackEnd Developer',
    img:'3.jpg',
    text:'Selena Marie Gomez is an American singer, actress, and producer. Gomez began her acting career on the childrens television series Barney & Friends. As a teenager, she rose to prominence for starring as Alex Russo.',

},
{
    id:2,
    name:'Charlie Puth',
    role:'Salesman',
    img:'Charlie.jpg',
    text:'Over the past three years, Charlie Puth has proven himself commercially with the extraordinary success of four multi-platinum hits, "One Call Away," "Marvin Gaye," and "We Don’t Talk Anymore" from his platinum-selling.',
},
{
    id:3,
    name:'Ariana Grande',
    role:'Singer',
    img:'Ariana.jpg',
    text:"Ariana Grande-Butera is an American singer, songwriter, and actress. Her four-octave vocal range has received critical acclaim, and her personal life has been the subject of widespread media attention.",
}
]

const autor=document.querySelector('.name');
const job=document.querySelector('.role');
const info=document.querySelector('#title');
const img=document.querySelector('.profile');
const prev_btn=document.querySelector('#left');
const next_btn=document.querySelector('#right');
const random_btn=document.querySelector('#random');

let curr_item=0;

window.addEventListener('DOMContentLoaded',function(){
showPerson(curr_item);
});
function showPerson(person){
    const item=reviews[person];
    img.style.backgroundImage="url("+ item.img +")";
autor.textContent=item.name;
job.textContent=item.role;
info.textContent=item.text;
}
next_btn.addEventListener('click',function(){
    curr_item++;
    if(curr_item > reviews.length -1){
        curr_item=0;
    }
    showPerson(curr_item);
});
prev_btn.addEventListener('click',function(){
    curr_item--;
    if(curr_item<0){
        curr_item=reviews.length-1;
    }
    showPerson(curr_item);
});
random_btn.addEventListener('click',function(){
    curr_item=Math.round(Math.random()* reviews.length);
    showPerson(curr_item);

})