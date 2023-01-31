let track_art=document.querySelector('.bg');
let track_name=document.querySelector('.music_track');
let track_artist=document.querySelector('.artist')

let playpause_btn=document.querySelector('.playpause_track');
let next_btn=document.querySelector('.next_track');
let prev_btn=document.querySelector('.prev_track');

let random_btn=document.querySelector('.fa-random');
let repeat_btn=document.querySelector('.fa-repeat');

let seek_slider=document.querySelector('.seek_slider');
let volume_slider=document.querySelector('volume_slider');
let current_time=document.querySelector('.current_time');
let total_duration=document.querySelector('.total_duration');
let curr_track=document.createElement('audio');

let track_index=0;
let isPlaying=false;
let isRandom=false;
let UpdateTime;


const music=[{

    name:'Calm Down',
    artist:'Selena Gomez',
    muisc:'Music/Calm-Down.mp3',
    img:'3.jpg'
},
{
    name:'No Tears Left To Cry',
    artist:'Ariana Grande',
    muisc:'Music/No Tears Left To Cry.mp3',
    img:'2.jpg'
},
{
    name:'Attention',
    artist:'Charlie Puth',
    muisc:'Music/Attention.mp3',
    img:'Charlie.jpg'
},{
    name:'Dandelions',
    artist:'RuthB',
    muisc:'Music/Dandelions.mp3',
    img:'Music/Dandelions.jpg'
},{
    name:'Hurts So Good',
    artist:'Astrid S',
    muisc:'Music/Hurts-So-Good.mp3',
    img:'Music/hurts.jpg'
},
{
    name:'Love is Gone',
    artist:'Slander',
    muisc:'Music/LoveIsGone.mp3',
    img:'Music/Slander.jpg'
},{
    name:'Umbrella',
    artist:'Rihanna ',
    muisc:'Music/Umbrella.mp3',
    img:'Music/Rihanna.jpeg'
},
{
    name:'Middle of The Night',
    artist:'Elley Duhe',
    muisc:'Music/Middle.mp3',
    img:'Music/ElleyDuhe.jpg'
}

];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(UpdateTime);
    reset();

    curr_track.src=music[track_index].muisc;
    curr_track.load();

    track_art.style.backgroundImage="url("+ music[track_index].img +")";
    track_artist.textContent=music[track_index].artist;
    track_name.textContent=music[track_index].name;

    UpdateTime=setInterval(setUpdate,1000);
    curr_track.addEventListener('ended',nextTrack);
}

function reset(){
    current_time.textContent="00:00";
    total_duration.textContent="00:00";
    seek_slider.value=0;
    // volume_slider.value=100;
}

function randomTrack(){
    isRandom ? pauseRandom():playRandom();
}
function playRandom(){
    isRandom=true;
    randomTrack.classList.add('randomActive');
    
}
function pauseRandom(){
    isRandom=false;
    randomTrack.classList.remove('randomActive');

}
function repeatTrack(){
    let current_index=track_index;
    loadTrack(current_index);
    playTrack();

}
function playpauseTrack() {
    isPlaying?pauseTrack():playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying=true;
    playpause_btn.innerHTML='<i class="fa fa-pause-circle fa-2x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying=false;
    playpause_btn.innerHTML='<i class="fa fa-play-circle fa-2x"></i>';

}
function nextTrack(){
    if(track_index < music.length-1 && isRandom ==false){
        track_index +=1;
    }
    else if(track_index < music.length-1 && isRandom ==true){
        let random_index=Number.parseInt(Math.random()*music.length);
        track_index=random_index;

    }else{
        track_index=0;
    }
    loadTrack(track_index);
    playTrack();
}

function prevTrack(){
    if(track_index>0){
        track_index -=1;
    }else{
        track_index=music.length-1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto=curr_track.duration * (seek_slider.value /100);
    curr_track.currentTime=seekto;
}
function setVolume(){
    curr_track.volume=volume_slider.value/100;
}
function setUpdate(){
    let seekPosition=0;
    if(!isNaN(curr_track.duration)){
        seekPosition=curr_track.currentTime*(100/curr_track.duration);
        seek_slider.value=seekPosition;

        let currentMinutes=Math.floor(curr_track.currentTime/60);
        let currentSeconds=Math.floor(curr_track.currentTime-currentMinutes*60);
        let durationMinutes=Math.floor(curr_track.duration/60);
        let durationSeconds=Math.floor(curr_track.duration-durationMinutes*60);

        if(currentSeconds <10){currentSeconds="0"+currentSeconds};
        if(durationSeconds <10){
            durationSeconds='0'+durationSeconds;
        }
        if(currentMinutes <10){
            currentMinutes="0"+currentMinutes;
        }
        if(durationMinutes<10){
            durationMinutes="0"+durationMinutes;
        }

        current_time.textContent=currentMinutes+':'+currentSeconds;
        total_duration.textContent=durationMinutes+":"+durationSeconds;
    }

}