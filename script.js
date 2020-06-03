let val;
val=String(5);
val=String([1,2,3,4]);
val=[1,2,3,45,22].toString();
val=[1,2,3,45,22].toLocaleString();
val=String(new Date());

// Number

val=Number('5');
val=Number([1,2,3]);

// Boolean

val=Number(true);
val=Number(false);




console.log(val);
console.log(typeof val);
console.log(val.length);


