const cardArray=[{
    name:'fries',
    img:'Images/French.png'
}
,
{
    name:'cheeseburger',
    img:'Images/cheeseburger1.png'
},
{
    name:'hotdog',
    img:'Images/hotdog 1.png'
},
{
    name:'ice-cream',
    img:'Images/ice-cream.png'
},
{
    name:'milkshake',
    img:'Images/milkshake.png'
}
,
{
    name:'pizza',
    img:'Images/pizza.png'
},
{
    name:'fries',
    img:'Images/French.png'
}
,
{
    name:'cheeseburger',
    img:'Images/cheeseburger1.png'
},
{
    name:'hotdog',
    img:'Images/hotdog 1.png'
},
{
    name:'ice-cream',
    img:'Images/ice-cream.png'
},
{
    name:'milkshake',
    img:'Images/milkshake.png'
}
,
{
    name:'pizza',
    img:'Images/pizza.png'
}
]
cardArray.sort(()=>0.5 - Math.random())
// console.log(cardArray)
const gridDisplay=document.querySelector('.grid');
let cardChosen=[];
let cardChosenId=[];
const cardsWon=[]

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement('img');
        card.setAttribute('src','Images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        gridDisplay.appendChild(card);
        
    }
}
createBoard();

function flipCard(){

    const cardId=this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    // console.log(cardChosen)
    // console.log(cardChosenId)
    this.setAttribute('src',cardArray[cardId].img)
    // console.log(cardChosen)
    if(cardChosen.length==2){
        setTimeout(checkMatch,500);
    }


}
let res=0;
const result=document.querySelector('#result');
function checkMatch(){
    
    // console.log('checking')
    const cards=document.querySelectorAll('.grid img');
    if(cardChosenId[0]==cardChosenId[1]){
        alert('You clicked the same Img');
        cards[cardChosenId[0]].setAttribute('src','Images/blank.png')
         cards[cardChosenId[1]].setAttribute('src','Images/blank.png')

    }
    else if(cardChosen[0]==cardChosen[1]){
        cards[cardChosenId[0]].setAttribute('src','Images/white.png')
        cards[cardChosenId[1]].setAttribute('src','Images/white.png')
        cards[cardChosenId[0]].removeEventListener('click',flipCard)
        cards[cardChosenId[1]].removeEventListener('click',flipCard)
        cardsWon.push[cardChosen]
        res +=1
        result.innerHTML=res;   
    }
    else{
         cards[cardChosenId[0]].setAttribute('src','Images/blank.png')
         cards[cardChosenId[1]].setAttribute('src','Images/blank.png')
    }
   
    cardChosen=[]
    cardChosenId=[]
    if(res==6){
        result.innerHTML="Congrats u Cleared The Round!❤"
    }
    console.log(res);
}
//console.log(cardsWon.length)



// console.log(result)
const btn=document.querySelector('.btn');
btn.addEventListener('click',function(){
    location.reload();
})