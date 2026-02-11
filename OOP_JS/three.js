class one{

    one_one(){
        console.log("one_one");
    }
}
class two extends one{

    two_two(){
        console.log("two_two");
    }
}
class three extends two{

    three_three(){
        console.log("three_three");
    } 
}
let obj = new three();
obj.one_one();
obj.two_two();
obj.three_three();  