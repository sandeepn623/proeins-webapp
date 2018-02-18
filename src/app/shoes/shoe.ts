export interface IShoe {
    id: number
    articleNumber: string;
    name: string;
    brand: string;
    color:string;
    size: number;
    stock: number;
}

export class Shoe implements IShoe {
    constructor(public id: number, public articleNumber: string, public name: string, 
        public brand: string, public color: string, public size: number, public stock: number) { 
    }
 } 
