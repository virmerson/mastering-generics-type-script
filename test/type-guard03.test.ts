import { expect , it, describe, test} from "vitest";
//import {isClient, isEmployee} from '../src/type-guards/type-guard03';
import {isClientObject as isClient, isEmployeeObject as isEmployee} from '../src/type-guards/type-guard03';
import { Client, Employee } from "../src/type-guards/type-guard01";

describe('Type Guard 03', () => {
    it('isClient function', ()=>{
       const client =  new Client(  1, 'John', '');
       expect(isClient(client)).toBeTruthy();

       const employee = new Employee(2, 'Doe', 1000);
       expect(isClient(employee)).toBeFalsy();

    })  

    it('isEmployee function', ()=>{
        const employee =  new Employee(  1, 'John', 1000);
        expect(isEmployee(employee)).toBeTruthy();

        const client = new Client(2, 'Doe', '');
        expect(isEmployee(client)).toBeFalsy();
        
     }) 
})