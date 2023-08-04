const computerChoice=document.getElementById('computer-choice');
const userChoice=document.getElementById('user-choice');
const result=document.getElementById('result');
let user;
let computer;
let res;
const btns=document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click',(e) =>{
user=e.target.id;
userChoice.innerHTML=user;
generateComputerChoice();
Result();
}))
function generateComputerChoice(){
    const randomNum=Math.floor(Math.random()*3)+1;
    switch(randomNum){
        case 1:
            computer='Rock';
            break;
        case 2:
            computer='Scissors';
            break;
        case 3:
            computer='Papers';
            break;
    }
    computerChoice.innerHTML=computer;
}
function Result(){
if(computer===user){
    res=' It\'s a Draw';
}
if(computer==='Rock'&&user==='Papers'){
    res='You Win!';
}
if(computer==='Rock'&&user==='Scissors'){
    res='You lost!';
}
if(computer==='Papers'&&user==='Scissors'){
    res='You Win!';
}
if(computer==='Papers'&&user==='Rock'){
    res='You lost!';
}
if(computer==='Scissors'&&user==='Papers'){
    res='You lost!';
}
if(computer==='Scissors'&&user==='Rock'){
    res='You Win!';
}
result.innerHTML=res;
}