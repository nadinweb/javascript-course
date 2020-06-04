const sliderItems=document.querySelectorAll(".item-slider");
const dots=document.querySelectorAll('.dot');


function displayNoneAllSlider() {
    sliderItems.forEach((itemSlider)=>{
        itemSlider.style.display="none";
    })
}


function noneDotsSlider(){
    dots.forEach((dot)=>{
        dot.classList.remove("activeDots");
    })
}

let n=0;
function arrowNext(){
    n++
    displayNoneAllSlider();
    if(n>=sliderItems.length){
        n=0;
    }
    noneDotsSlider();
    sliderItems[n].style.display="block"; 

    
    dots[n].classList.add("activeDots");

}

function arrowPrev(){
    n--
    displayNoneAllSlider();
    if(n<0){
        n=sliderItems.length-1;
    }
    noneDotsSlider();
    sliderItems[n].style.display="block"; 
    
    
    dots[n].classList.add("activeDots");
}


setInterval(function(){
    arrowNext();
},3000)