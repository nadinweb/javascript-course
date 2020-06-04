// for(let index=0;index<=10;index++){
//     console.log(index);
    
// }

// let i=0;
// while(i<=100){
//     console.log(i);
//     i++
    
// }


// let cars=["ford","pride","peykan","benz","afrod"];

// cars.forEach((car)=>{
//     console.log(car);
    
// })


let users={
    name:"Ali",
    family:"Razavi",
    fullName(){
        console.log(this.name + " " + this.family);  
    }
}


for(user in users){

    if(typeof users[user] == "function"){
        users[user]();
        continue;
        
    }
    console.log(`${user} : ${users[user]} `);
    
}