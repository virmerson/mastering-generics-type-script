import {Client, Employee} from '../type-guards/type-guard01';   

type PersonType = Client| Employee;

//based on the email property
const isClient = (person:PersonType):person is Client=>{
    return (person as Client).email !==undefined
}
//based on instanceof
const isClientObject = (person:PersonType):person is Client=>{
    return (person instanceof Client)
}

//based on the salary property
const isEmployee = (person:PersonType):person is Employee=>{
    return (person as Employee).salary !==undefined
}

//based on instanceof
const isEmployeeObject = (person:PersonType):person is Employee=>{
    return (person instanceof Employee)
}

export {isClient, isEmployee, isClientObject, isEmployeeObject}