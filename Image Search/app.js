const accesskey="-xBXa9z0NGGR6HChGdcUmJaW1eYeDkoh_SW3lrMZCnM";

const formEl=document.querySelector("form");
const inputEl=document.getElementById('Search-input');
const searchResults=document.querySelector("search-results");
const showMore=document.getElementById("showmore");

let inputData="";
let page=1;

async function searchImages(){
    inputData=inputEl.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;
    const response=await fetch(url);
    const data=await response.json()

    const results =data.results;
    // console.log(data)
    // console.log(results)


    if(page ==1){
        searchResults.innerHTML=""
    }
    results.map((result) =>{
        const imageWrapper =document.createElement('div');
        imageWrapper.classList.add("search-result");
        const img=document.createElement('img');
        img.src=result.urls.small;
       img.alt=result.alt_description;
       const imageLink=document.createElement('a') ;
       imageLink.href=result.links.html;
       imageLink.target="_blank";
       imageLink.textContent=result.alt_description;

       imageWrapper.appendChild(img);
       imageWrapper.appendChild(imageLink);
       imageWrapper.appendChild(imageWrapper);

    });

    page++
    if(page>1){
        showMore.style.display="block";

    }
}
formEl.addEventListener("submit",(event) =>{
    event.preventDefault();
    page=1;
    searchImages();
})
showMore.addEventListener("click",() =>{
 
    searchImages();
})