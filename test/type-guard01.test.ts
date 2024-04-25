import { it, expect } from 'vitest';
import { getRandonPerson , Client, Employee, Person} from '../src/type-guards/type-guard01';

it('getRandonPerson should be instance of a Client or Employee', () => {
    const person:Client|Employee= getRandonPerson();
    expect(person).toBeDefined();

    if(person instanceof Client){
        expect(person.email).toBeDefined();
        console.log('Client', person.email);
    }else {
        expect(person.salary).toBeDefined();
        console.log('Employee', person.salary);
    }

});
 