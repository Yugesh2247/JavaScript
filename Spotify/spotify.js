const music=[{
bg:'Images/Selenabg.jpg',
    name:'Calm Down',
    artist:'Selena Gomez',
    song:'Music/Calm-Down.mp3',
    img:'Images/Selena.jpg'
},
{
    bg:'Images/Arainabg.jpg',
    name:'No Tears Left To Cry',
    artist:'Ariana Grande',
    song:'Music/No Tears Left To Cry.mp3',
    img:'Images/Ariana.jpg'
},
{
    bg:'Images/Charlibg.jpg',
    name:'Attention',
    artist:'Charlie Puth',
    song:'Music/Attention.mp3',
    img:'Images/Charlie.jpg'
},{
    bg:'Images/Dandelionsbg.jpg',
    name:'Dandelions',
    artist:'RuthB',
    song:'Music/Dandelions.mp3',
    img:'Images/Dandelions.jpg'
},{
bg:'Images/hurtsbg.jpg',
    name:'Hurts So Good',
    artist:'Astrid S',
    song:'Music/Hurts-So-Good.mp3',
    img:'Images/hurts.jpg'
},
{
    bg:'Images/Slanderbg.jpg',
    name:'Love is Gone',
    artist:'Slander',
    song:'Music/LoveIsGone.mp3',
    img:'Images/Slander.jpg'
},{
    bg:'Images/Rihannabg.png',
    name:'Umbrella',
    artist:'Rihanna ',
    song:'Music/Umbrella.mp3',
    img:'Images/Rihanna.jpeg'
},
{
    bg:'Images/ElleyDuhebg.jpg',
    name:'Middle of The Night',
    artist:'Elley Duhe',
    song:'Music/Middle.mp3',
    img:'Images/ElleyDuhe.jpg'
},
{
    bg:'Images/macha.jpeg',
    name:'Ninu Dochu Kondu Mathi',
    artist:'Aggipetti Macha',
    song:'Music/Macha.mp3',
    img:'Images/macha.jpeg'
}


];

const bgImg=document.getElementById('bg');
const track_img=document.getElementById('track_img');
const track_art=document.getElementById('track_artist') ; 
const track_song=document.getElementById('track_name'); 
let curr_track=document.createElement('audio');
const next_btn=document.getElementById('forward');
const play_btn=document.getElementById('play');
const prev_btn=document.getElementById('backward');
const pause_btn=document.getElementById('pause');
const random_btn=document.getElementById('shuffle');
const lyrics=document.getElementById('lyrics');
let track_index=0;
let isPlaying;
let isRandom;



play_btn.addEventListener('click',()=>{
    // event.preventDefault();
    // curr_track.load();
    // track_index++;
    play(track_index);
    
    // console.log(track_index);
    // curr_track.src=music[track_index].song;
    // curr_track.play();
    // play_btn.textContent='<i class="fa fa-pause-circle fa-2x fa-lg " id="pause"></i>'
    // play_btn.style.display="none"
console.log(pause_btn)
play_btn.style.display="none";
pause_btn.style.display='block';

})
function play(track_index){
    curr_track.src=music[track_index].song;
    let musics=curr_track;
    console.log(musics);
    curr_track.play();
    bgImg.style.backgroundImage="url("+music[track_index].bg+")";
    track_img.style.backgroundImage="url("+music[track_index].img+")";
    track_art.textContent=music[track_index].artist;
    track_song.textContent=music[track_index].name;
    
}
next_btn.addEventListener("click",(event)=>{
    event.preventDefault();
    track_index++;
    if (track_index>=music.length){
        track_index=0;
    }
    play(track_index);
    
    play_btn.style.display="none";
pause_btn.style.display='block';
})
prev_btn.addEventListener('click',(event)=>{
    event.preventDefault();
    track_index--;
    if (track_index<0){
        track_index=music.length-1;
    }
    play(track_index);
    play_btn.style.display="none";
pause_btn.style.display='block';
})
pause_btn.addEventListener('click',pauseaudio)
function pauseaudio(){
    curr_track.pause();
    pause_btn.style.display='none';
    play_btn.style.display='block';
}

random_btn.addEventListener('click',()=>{
    const random_index=parseInt(Math.random()*music.length)
    play(random_index);
    pause_btn.style.display='block';
    play_btn.style.display='none';
})

console.log(lyrics);

lyrics.onclick=function(){
    lyrical=document.getElementById('lyrical');
    lyrical.classList.toggle('active');
}