class Rectangle{
    name;
    height;
    breadth;
    constructor(height,breadth){
        this.name='Rectangle';
        this.height=height;
        this.breadth=breadth;
    }
    sayName(){
        console.log(`Hi, I am a ${this.name}.`);
    }
    area(){
       console.log(`The area of a ${this.name} is `+ this.height*this.breadth);
    }
}
class Square extends Rectangle{
    constructor(length){
        //this.height; this keyword cannot be used before super keyword in case of inheriting from the parenting class
        super(length,length);
        this.name='Square';
        this.length=length;
        this.breadth=length;
    }
}

const rect=new Rectangle(12,13);
rect.sayName();
rect.area();
const sq=new Square(5);
sq.sayName();
sq.area();
