let play=document.getElementById("play");
let pause=document.getElementById("pause");
let audio=new Audio('calmdown.mp3');
play.addEventListener('click',(event) =>{
    event.preventDefault();
    // let audio=new Audio('calmdown.mp3');
    audio.play();
//    play.innerHTML='<i class="fa fa-pause-circle fa-2x"></i>';
play.style.display='none';
pause.style.display='block';
})

pause.addEventListener('click',() =>{
    // event.preventDefault();
    audio.pause();
    play.style.display='block';
pause.style.display='none';
})