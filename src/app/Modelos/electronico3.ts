import {Articulo} from './Articulo';

export class Electronico3 implements Articulo {
    public nombre:string;
    public precio:number;
    public categoria:string;

    constructor(){
        this.categoria='electronico3';
    }

    public imprimir():string{
        let nombre:string='categoria';
        return nombre + ': ' + this.categoria;
    }

    public esElectronico():boolean{
        return true;
    }




}
