import identity from '../src/generic-functions/identity'
import { expect, it } from 'vitest'

it("Should test identity function type string, number and object ", () => {

    expect(identity<number>(1)).toBe(1);

    expect(identity<string>("Hello")).toBe("Hello");

    expect(identity<object>({name:"John", age:23})).toEqual({name:"John", age:23});
})

it("Should test identity function type Array", () => {
    
    const result = identity<Array<number>>([1, 2, 3]);
    expect(Array.isArray(result)).toBe(true);
})

it ("Array of string", ()=>{
    
    let resultArrayString = identity<Array<string>>(["Hello", "World"])
    expect(resultArrayString).toEqual(["Hello", "World"]);
    
    let everyAreStrings = resultArrayString.every((item) => typeof item === "string")
    expect(everyAreStrings).toBe(true)
})

it ("Array of numbers", ()=>{

    const result = identity<Array<number>>([1, 2, 3]);
    expect(Array.isArray(result)).toBe(true);
    
    let everyAreNumbers = result.every((n) => typeof n === "number")
    expect(everyAreNumbers).toBe(true);

})
  