

let button=document.getElementById('submit');
button.addEventListener("click",(event)=>{
    event.preventDefault();
    var a=parseInt(document.getElementById('first').value);
var b=parseInt(document.getElementById('second').value);
    // alert()
    let res=document.getElementById('result');
    var sum=0;
    // var sum=a+b;
    
    const operator=document.getElementById('operators');
    out=operator.value;
    if(out=='add'){
        sum=a+b;
    }else if(out=='sub'){
        sum=a-b;
    }else if(out=='mul'){
        sum=a*b;
    }else{
        sum=a/b;
    }
    console.log(sum)
    res.innerHTML=sum;
})