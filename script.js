let data=[
    {name:"Course JavaScript",img:"https://test.png",isFree:1,teacher:"AliRazavi",students:2000},
    {name:"Course Laravel",img:"https://test.png",isFree:0,teacher:"Mohammad Aghajani",students:20},
    {name:"Course Html css",img:"https://test.png",isFree:0,teacher:"AliRazavi",students:100},
    {name:"Course Php",img:"https://test.png",isFree:1,teacher:"Mohammad Aghajani",students:10},
]


let person={
    name:"Ali",
    family:"Razavi",
    age:22,
    hobbies:["Programming","JavaScript"],
    isMarrid:false,
    fullName:function(){
        return this.name + " " + this.family;
    },

    sayBirthday:function(){
        return 1399-this.age;
    }

}

let val;

val=data[0].name;

val=person.hobbies;
val=person.sayBirthday();
val=person.fullName();

console.log(val);
