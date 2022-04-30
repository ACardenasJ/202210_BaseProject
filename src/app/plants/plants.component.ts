import { Component, Input, OnInit } from '@angular/core';
import { Plants } from '../models/plants';
import { PlantsService } from './plants.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  plants: Array<Plants> = [];
  tipoPlanta: any = {"Interior": 0, "Exterior": 0};
  @Input() titulos: any = ['#', 'Nombre Común', 'Tipo', 'Clima'];
  
  constructor(private plantsService: PlantsService) { }

  getPlants(): void{
    this.plantsService.getPlants()
    .subscribe((plantas) => {
      this.plants = plantas;
      this.getTipoPlanta(this.plants);  
    });  
  }

  getTipoPlanta(plants: Array<Plants>):void{
    for(let planta of plants){
      if(planta.tipo == 'Interior'){
        this.tipoPlanta['Interior']+=1;
      }
      else{
        this.tipoPlanta['Exterior']+=1;
      }
    }
  }

  ngOnInit() {
    this.getPlants();
  }
}
