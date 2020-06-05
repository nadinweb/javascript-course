const formRegitser=document.querySelector(".formRegitser");
let users=[];
formRegitser.addEventListener("submit",(e)=>{
    e.preventDefault();
    let UserLists=JSON.parse(localStorage.getItem('users'));
    for(u in UserLists){
        if (UserLists[u].username === formRegitser.username.value){
            console.log("is have username in website ");
            break;
            
        }
        if (UserLists[u].email === formRegitser.email.value){
            console.log("is have email in website ");
            break;
        }

    }
    let user={
        username:formRegitser.username.value,
        email:formRegitser.email.value,
        password:formRegitser.password.value,
    }
    users.push(user);
    localStorage.setItem('users',JSON.stringify(users));
    window.location.href="login.html";
})




