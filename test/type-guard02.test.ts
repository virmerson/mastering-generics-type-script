import {isNumber, isString, isBoolean} from '../src/type-guards/type-guard02';
import { it, expect, describe } from 'vitest';


describe('Type Guard 02', () => {
    it('isNumber should verify numbers', () => {
        expect(isNumber(1)).toBeTruthy();
        expect(isNumber(1.1)).toBeTruthy();

        expect(isNumber('1')).toBeFalsy();
        expect(isNumber('1.1')).toBeFalsy();
        
    });

    it('isNumber should verify strings', () => {
        expect(isString('1')).toBeTruthy();
        expect(isString('1.1')).toBeTruthy();

        expect(isString(1)).toBeFalsy();
        expect(isString(1.1)).toBeFalsy();
    });

    it('isBoolean should verify booleans', () => {
        expect(isBoolean(true)).toBeTruthy();
        expect(isBoolean(false)).toBeTruthy();

        expect(isBoolean(1)).toBeFalsy();
        expect(isBoolean('1')).toBeFalsy();
    });

})

