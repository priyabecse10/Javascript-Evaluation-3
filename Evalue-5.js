class Triple{
    static customName='Tripler';
    static description='I triple any number you provide';
    static calculate(n=1){
        return n*3;
    }
}
class SquaredTriple extends Triple{
    static description='I square the triple of any number you provide';
    static calculate(n){
        return super.calculate(n)*super.calculate(n);
    }
}
console.log(Triple.description);
console.log(Triple.calculate());
console.log(Triple.calculate(6));
const tp=new Triple();
console.log(SquaredTriple.calculate(3));
console.log(SquaredTriple.customName);
console.log(tp.calculate); // since calculate is a static method it cannot be called. 

// creating instance for a class
class Cube{
    constructor(n){
        this.name='Cube';
        this.num=n;
    }
    sayName(){
        console.log(`Hi, I am a ${this.name}.`);
    }
    area(){
       console.log(`The area of a ${this.name} is `+ this.num*this.num*this.num);
    }
}
class CubeDouble extends Cube{
    constructor(n){
        //this.height; this keyword cannot be used before super keyword in case of inheriting from the parenting class
        super(n);
        this.name='Double the cubes';
        this.num=n;
    }
}

const rect=new Cube(12);
rect.sayName();
rect.area();
const cd=new CubeDouble(15);
cd.sayName();
cd.area();