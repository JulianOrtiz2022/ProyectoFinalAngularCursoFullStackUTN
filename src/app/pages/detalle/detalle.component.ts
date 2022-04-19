import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/interfaces/Productos';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  producto:Productos | undefined
  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService
  ) { 
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    if(id){
    this.productosService.getById(id)
    .subscribe((data:Productos)=>{
      this.producto=data
    })
    }
}

  ngOnInit(): void {
  }

}
