import { Component, OnInit } from '@angular/core';
import { Productos, ResponseProductos } from 'src/app/interfaces/Productos';
import { ProductosService } from '../../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Hola Julian Ortiz" // el Bindeo es solo en clases.
  modificado = false // variable
  classContainerTitle:any=""
  productos:Productos[]=[]
  productosTv:Productos[]=[]
  productosAsync:any
  productosAwait:any
  constructor(
    private productosService:ProductosService
  ) { 
    //Observable
    this.productosService.getAll()
    .subscribe((data:ResponseProductos)=>{
      console.log(data)
      if(data.results)
      this.productos=data.results
    })
    this.productosService.getAllTv()
    .subscribe((data:ResponseProductos)=>{
      console.log(data)
      if(data.results)
      this.productosTv=data.results
    })

    //ASync
  /* this.productosAsync=this.productosService.getAllAsync()
  
  }
  //async / await
  async getProductos(){
    try{
      const response:any = await this.productosService.getAllPromise()
      this.productosAwait = response.results
    }catch(e){
    }*/
   }
  ngOnInit(): void {
  }

}
