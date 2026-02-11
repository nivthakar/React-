class stud{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    info_stud(){
        console.log("This is a Method");
    }
}
let obj = new stud("John", 25);
let obj2 = new stud("Krish", 23);
obj.info_stud();
console.log(obj.name);
console.log(obj.age);
console.log("Your name is ",obj2.name);
console.log("Your age is ",obj2.age);