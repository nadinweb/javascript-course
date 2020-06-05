const formLogin=document.querySelector(".formLogin");


formLogin.addEventListener("submit",(e)=>{
    e.preventDefault();

   let users=JSON.parse(localStorage.getItem('users'));
   
   for(user in users){
        if(users[user].email == formLogin.email.value){
            if(users[user].password === formLogin.password.value){
                window.location.href="home.html";
                
            }
            else
            {
                console.log("password  in not wrong ");
                
            }
        }
        else
        {
            console.log("email  is not found !");
            
        }
        
   }
   
})