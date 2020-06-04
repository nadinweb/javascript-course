let lists=document.querySelectorAll("li");

lists.forEach((val,index)=>{
    if(index%2==0){
        val.style.backgroundColor="red";
    }
    
})


const modal=document.querySelector("#modal");
const overlayModal=document.querySelector(".overlay-modal");
const closeModal=document.querySelector(".close-modal");

overlayModal.style.display="none";


showModal();
closeMyModal();

function showModal(){
    return modal.addEventListener("click",()=>{
        overlayModal.style.display="block";
    });
    
}

function closeMyModal(){
    return closeModal.addEventListener("click",(e)=>{
        e.preventDefault();
        overlayModal.style.display="none";
    })
}