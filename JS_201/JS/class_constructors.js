console.log("successfully loaded class_constructors.js");


class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    greeting(){
        console.log(`Hello ${this.name}`);
        console.log(`e-mail: ${this.email}`);
        console.log(`phone: ${this.phone}`);
    }

    setName(name){
        this.name = name;
    }

    setEmail(email){
        this.email = email;
    }

    setPhone(phone){
        this.phone = phone;
    }
}

const Personal_Info = new Person("Vinicius", "vvgmariucci@gmail.com", "(44)988197981");


Personal_Info.greeting();

Personal_Info.setName("Jane");
Personal_Info.setEmail("jane@gmail.com");
Personal_Info.setPhone("(41)988909876");

Personal_Info.greeting();


