(function(){
let display=document.querySelector('.display');
let buttons=document.querySelectorAll('.btn');
let equals=document.querySelector('.btn-equal');
let clear=document.querySelector('.btn-clear');

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
      let value1= e.target.dataset.num;
      display.value += value1;
    })
});

equals.addEventListener('click',function(e){
    if(display.value ===''){
        display.value="";
    }
    else{
    let answer = eval (display.value);
    display.value=answer;
    }
});

clear.addEventListener('click',function(e){
    display.value="";
})
})();