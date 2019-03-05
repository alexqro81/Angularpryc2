//import { Component } from '@angular/core';

/*@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  
})

Export class AppComponent {
  title='Angularpryc2'

}*/

import { Component } from '@angular/core';
import {Articulo,Abarrotes,Electronico3,Samsung,Auto,Ford,Chevrolet} from './Modelos/'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
      let Articulo:Articulo;

      let categoria='abarrotes';
      

      if(categoria=='abarrotes'){
        Articulo=new Abarrotes();
        console.log(Articulo.imprimir())
      }
      
      
      if(categoria=='electronico3'){
        Articulo=new Electronico3();
        console.log(Articulo.imprimir())
      }
      
      let samsung:Samsung= new Samsung();
      console.log(samsung.getCategoria())

      let ford:Auto=new Ford();
        console.log(ford.motor);

  }

/*
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTest';

  public a: string = "leo";
  public b: number = 23;
  public boolean = true;

  public q: Date= new Date();
  public h = "12";

  public y: any ={
    name: 'leo',
    lastname: 'Escobar'
  }

  private arreglo1: string[];

  private arreglo2: string[]=[];

  private arreglo3: any[] = ["12",'12',12,{
    name: "leo",
    lastname: "Escobar"
  }];

  public dicc = {
    '1': {
      name: "leo",
      lastname: "Escobar"
    },
    '2': {
      name: "leo",
      lastname: "Escobar"
    },
    '3': {
      name: "leo",
      lastname: "Escobar"
    }
  }


  

  private arreglo4: number[] = [1,2,3,4];

  public t = this.arreglo3[2];

  public callback = ((para: string) => {return para+'algo'});

  public metodo = this.callback;

  public rest: string = this.metodo('leo');

  public objeto1: any = {

  }



  

  public  nume: number[] = [4,2,5,6,3]
  constructor(){
  console.log(this.rest);
/*
  for(let i = 0; i<this.arreglo3.length;i++)
    {
      console.log(this.arreglo3[i]);
      
    }

   for (let ob of this.arreglo3){
     console.log(ob.name);
   } 

   for(let attr in this.objeto1){
     console.log(attr);
    }

    let desordenado = [40,1,5,200];
    let ordenado= desordenado.sort((a: number, b:number) => {return a-b});


    console.log(ordenado);
  }


 */
}  