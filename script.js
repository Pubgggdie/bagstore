class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
}

class Car extends Vehicle{
    drive(){
        return`${this.make} ${this.model} is driving.`;
    }
}

    let myCar = new Car("hello world","kakan");
    // console.log(myCar.drive());
    


    class Tea {
        constructor(name, price, flavors) {
            this.name = name;
            this.price = price;
            this.flavors = flavors;
        }
    
        taste() {
            return `${this.name} is a ${this.flavors} tea and costs ${this.price}.`;
        }
    }
    
    let myTea = new Tea("Oolong tea", "$14", "flavorful");
    // // console.log(myTea.taste());


    // const Person = {
    //     name : "John",
    //     className : "8th class",
    //     age : 18,
    //     grade : "A",
    //   intro(){
    //     return `Hello, my name is ${this.name}. I'm a ${this.className} student, and I'm ${this.age} years old. My grade is ${this.grade}.`;
    //   }
    // }

// console.log(Person.intro());


// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     introduce(){
//         return `Hello, my name is ${this.name}. I'm ${this.age} years old.`;
//     }
// }
// let Myperson = new Person("aditya ojha", "13")
// console.log(Myperson.introduce());

// function Myperson(){
//     function inner(){
//         return "Hello, my name is Aditya Ojha. I'm 13 years old."
//     }
// return inner();
// }
// const greet = Myperson();
// console.log(greet);
function Person(name, age) {
    this.name = name;
    this.age = age;
     
    this.greet = function() {
        return `Hello, my name is ${this.name}. I'm ${this.age} years old.`;
    };
}

let myPerson = new Person("Aditya Ojha", 13);
console.log(myPerson.greet());