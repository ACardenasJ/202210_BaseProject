import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{AppRoutingModule} from '../app-routing.module';
import { PlantsComponent } from './plants.component';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [PlantsComponent],
  exports: [PlantsComponent]
})
export class PlantModule { }
