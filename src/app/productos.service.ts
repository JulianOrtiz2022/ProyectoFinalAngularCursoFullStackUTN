import { HttpClient } from '@angular/common/http';
/*import { ValueConverter } from '@angular/compiler/src/render3/view/template';*/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import { Productos, ResponseProductos } from './interfaces/Productos';
/*import {lastValueFrom} from "rxjs";*/

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
      private http:HttpClient
  ) {}
    getAll():Observable<ResponseProductos>{
      return this.http.get<ResponseProductos>("https://api.mercadolibre.com/sites/MLA/search?q=ipod") // get consume informacion
    }
    getAllTv():Observable<ResponseProductos>{
      return this.http.get<ResponseProductos>("https://api.mercadolibre.com/sites/MLA/search?q=tv") // get consume informacion
    }

  /* getAllAsync():Observable<ResponseProductos>{
      return this.http.get<ResponseProductos>("https://api.mercadolibre.com/sites/MLA/search?q=tv").pipe(map((value:any)=>{return value["results"]}))
  }
  getAllPromise(){
    return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=ipod").toPromise()
  }*/
  getById(id:string):Observable<Productos>{
    return this.http.get<Productos>("https://api.mercadolibre.com/items/" + id)
  }
}