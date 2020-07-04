export class Ingredient {
    constructor(public name:string, public count:number){}

    incrementCount(){
        this.count++;
    }
}
