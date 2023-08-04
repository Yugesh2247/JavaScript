const colors=['Red','Blue','Green','Yellow','White','Powderblue'];
let button=document.querySelector('#btn');

var i=0
if(i>colors.length-1){
    i=0;
}
btn.addEventListener('click',function()
{
    let result=document.querySelector('#result');
    document.body.style.backgroundColor=colors[i];
    result.textContent=colors[i];

    i +=1;
})
