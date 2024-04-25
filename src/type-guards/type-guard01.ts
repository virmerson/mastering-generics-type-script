export interface Person {  
    id:number;
    name:string;
}

export class Client implements Person {
    id:number;
    name:string;
    email:string;     

    constructor(id:number, name:string, email:string){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

export class Employee implements Person {
    id:number;
    name:string;
    salary:number;
    constructor(id:number, name:string, salary:number){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}

export const getRandonPerson= ()=>  {
    return Math.random() > 0.5 
    ? new Client(1, 'John', 'johns@gmail.com') 
    : new Employee(2, 'Doe', 1000);
}