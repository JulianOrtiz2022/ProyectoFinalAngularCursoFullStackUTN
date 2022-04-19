import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoHeaderComponent } from './listado-header/listado-header.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListadoHeaderComponent,
    ResultadosComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainComponent
  ]
})
export class ListadosModule { }
