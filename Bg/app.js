const btn=document.getElementById('btn');
const body=document.querySelector('body')

const color=['red','green','blue','yellow','violet','purple','pink'];
btn.addEventListener("click",change)
function change(){
const colorIndex=parseInt(Math.random()*color.length)
body.style.backgroundColor=color[colorIndex];
}