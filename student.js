
let currentDate = new Date().toJSON().slice(0, 10);
console.log(currentDate); // "2022-06-17"

class Student{

    constructor(name, surname, dob){
        this.name = name;
        this.surname = surname;
        this.dob = dob
    }
    
    toString(){
        return `${this.name}\n${this.surname}\n`
    }

   

}




