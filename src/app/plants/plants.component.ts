import { Component, Input, OnInit } from '@angular/core';
import { Plants } from '../models/plants';
import { PlantsService } from './plants.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  Plants: Array<Plants> = [];
  objectKeys = Object.keys;
  
  @Input() titulos: any = ['#', 'Nombre Común', 'Tipo', 'Clima'];
  
  constructor(private plantsService: PlantsService) { }

  getPlants(): void{
    this.plantsService.getPlants()
    .subscribe((plantas) => {
      this.Plants = plantas;
    });
  }
  ngOnInit() {
    this.getPlants();
   // console.log("hola " + this.getPlants());
  }

}
