//typeof recognized: boolean, string, bigint, symbol, undefined, function, number
//value is 

export function isNumber(value:any):value is number{
    return typeof value ==='number';
}

export function isString(value:any):value is string{
    return typeof value==='string';
}

export function isBoolean(value:any):value is boolean{
    return typeof value==='boolean';
}   