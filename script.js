const sliderItems=document.querySelectorAll(".item-slider");
const dots=document.querySelectorAll(".dot");
function displayNoneAllSlider(){
    sliderItems.forEach((itemSlider)=>{
        itemSlider.classList.remove("active");
    })
}


function removeAllDots(){
    dots.forEach((dot)=>{
        dot.classList.remove("active-dot");
    })
}

let n=0;
function arrowRight(){
    n++;  
    displayNoneAllSlider();
    if(n>=sliderItems.length){
        n=0;
    }
    sliderItems[n].classList.add("active");
    removeAllDots();
    dots[n].classList.add('active-dot');
}


function arrowLeft(){
    n--;  
    displayNoneAllSlider();
    if(n<0){
        n=sliderItems.length-1;
    }
    sliderItems[n].classList.add("active");
    removeAllDots();
    dots[n].classList.add('active-dot');
}


setInterval(() => {
    arrowRight();
}, 3000);