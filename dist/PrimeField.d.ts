import { Field } from './Field';
export declare class PrimeField extends Field<number> {
    modulus: number;
    constructor(mod: number);
    zero: () => number;
    one: () => number;
    equals: (x: number, y: number) => boolean;
    negate: (x: number) => number;
    add: (x: number, y: number) => number;
    multiply: (x: number, y: number) => number;
    reciprocal: (w: number) => number;
    _check: (x: number) => number;
}
