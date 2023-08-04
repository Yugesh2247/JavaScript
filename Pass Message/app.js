let message=document.getElementById('search-bar');
let button=document.getElementById('search-button');
button.addEventListener('click',(event)=>{
    event.preventDefault();
    let result=document.getElementById('result');
    result.textContent = message.value;
    message.value.textContent=" ";
    // console.log(result)
})
