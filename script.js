let paragras=document.querySelectorAll("p");
paragras.forEach((el)=>{
    el.setAttribute("title",el.textContent);
});

let code=document.querySelector("pre");

code.style.backgroundColor="red";
code.style.color="white";


const websites=[
    "google","facebook","youtube","7learn"
]

let ul=document.querySelector("#list-website");



let li="";
websites.forEach((el)=>{
    li+=`<li class='list-group-item'><a href='https://${el}.com'>${el}</a></li>`;
    ul.innerHTML=li;
})


let inp=document.querySelector("#download__link");
const result=document.querySelector("#result");
inp.addEventListener("keyup",(e)=>{
    
    
    result.textContent=e.target.value;
})




