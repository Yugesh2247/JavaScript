let result=document.getElementById('result');
let count=0;
let countValue;
let lower=document.getElementById('left')
let higher=document.getElementById('right')
higher.addEventListener('click',(event)=>{
    event.preventDefault();
    count++;
    result.textContent =count;
    countValue=result.textContent;
   
})
lower.addEventListener('click',(event)=>{
    event.preventDefault();
    count--;
    result.textContent =count;
    countValue=result.textContent;
    // console.log(result)
    
})
