class Person{
    constructor(names){
        this.name=names;
    }
    introduceSelf(){
        console.log(`Hi! I am ${this.name}`);
    }
}
const priya=new Person('Priya');
priya.introduceSelf();
