import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Plants } from '../models/plants';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

    private apiUrl: string = "";

    constructor(private http: HttpClient) { }
    getPlants(): Observable<Plants[]> {
      this.apiUrl = environment.baseUrl;
      return this.http.get<Plants[]>(this.apiUrl);
    }
  
  
  }
  