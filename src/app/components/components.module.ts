import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { DataTableComponent } from './data-table/data-table.component';


@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonFormComponent,
    DataTableComponent
  ],
  exports: [
    PokemonCardComponent,
    PokemonFormComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
