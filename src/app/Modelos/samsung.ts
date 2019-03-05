import {Electronico3} from './electronico3'


export class Samsung extends Electronico3 {
        constructor(){
                super();

        }

        public setPrecio(precio:number){
            this.precio=precio;
        }

        public getCategoria():String{
            return this.categoria;
        }
}
