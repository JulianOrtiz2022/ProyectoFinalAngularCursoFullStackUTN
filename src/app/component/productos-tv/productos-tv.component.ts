import { Component, OnInit, Input } from '@angular/core';
import { Productos } from 'src/app/interfaces/Productos';

@Component({
  selector: 'app-productos-tv',
  templateUrl: './productos-tv.component.html',
  styleUrls: ['./productos-tv.component.css']
})
export class ProductosTvComponent implements OnInit {

  @Input()
  data1!:Productos
  constructor() { }

  ngOnInit(): void {
  }

}
