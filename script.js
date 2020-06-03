function rand(number){
    return Math.floor(Math.random()*number)+1;
}

let number1=40;
let number2=30;
let val;

val=number1+number2;
val=number1-number2;
val=number1/number2;
val=number1*number2;
val=number1**number2;
val=number1%number2;

val=Math.max(5,10,20,30,-80,80);
val=Math.min(5,10,20,30,-80,80);
val=Math.round(20.60);

val=rand(100);

console.log(val);
