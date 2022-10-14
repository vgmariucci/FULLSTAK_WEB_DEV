console.log("Successfully loaded classes.js");

class MyClassName {
    setName(name){
        this.name = name;
    }
    speak(){
        if(this.name === undefined){
            this.name = "There wasn't passed a name!";
        }
        console.log("This is printing with a class object");
        console.log(`The name passed to this class was: ${this.name}`);
    }
}
const myClassName = new MyClassName();

myClassName.speak();

myClassName.setName("Jane");
myClassName.speak();