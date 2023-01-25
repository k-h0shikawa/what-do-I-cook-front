import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipt';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  
  apiUrl : string = 'http://localhost:8080/menu'

  constructor( private httpclient: HttpClient) { }

  getRecipts(): Observable<Recipe[]>{
    return this.httpclient.get<Recipe[]>(this.apiUrl);
  }
}
