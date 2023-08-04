const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn=document.querySelector("#btn");
const result=document.getElementById('#result');

btn.addEventListener('click',function(){
    let hexcolor="#";
    for (let i =0; i < 6; i++) {
        hexcolor += hex[0];
    }
result.textContent=hexcolor;
document.body.style.backgroundColor=hexcolor;
});