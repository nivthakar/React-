class phone{

    constructor(uname, price){
        this.uname = uname;
        this.price = price;
    }
    info_phone(){
        
        return("Your phone name is "+this.uname+" and price is "+this.price);

    }
}
let obj = new phone("Iphone",999);
let obj2 = new phone("Samsung",1000);
console.log(obj.info_phone());
console.log(obj2.info_phone());