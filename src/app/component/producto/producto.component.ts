import { Component, OnInit, Input} from '@angular/core';
import { Productos } from 'src/app/interfaces/Productos';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input()
  data!:Productos
  constructor() { }

  ngOnInit(): void {
  }

}
