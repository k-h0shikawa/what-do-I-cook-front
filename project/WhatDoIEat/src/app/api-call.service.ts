import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipt';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  // テスト用ダミーデータ
  recipes: Recipe[] = [{
    id: 1,
    menuName: "dummyMenu",
    ingredients: [{id: 11, ingredientName: "dummyIngredients"}]
  }]
  
  apiUrl : string = 'http://localhost:8080'


  HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json; charset=UTF-8'
    })
  };


  constructor( private httpclient: HttpClient) { }

  /** レシピの内容を取得する
   * 
   * */ 
  getRecipts(): Observable<Recipe[]>{
    return this.httpclient.get<Recipe[]>(this.apiUrl + "/menu");

  }

  /** 入力された食材から作成できるレシピを返す */
  getCanMakeRecipts(ownIngredients:string) : Observable<Recipe[]>{

    return this.httpclient.post<any>(
      this.apiUrl + "/canMakeMenu" , 
      ownIngredients,
      this.HTTP_OPTIONS
      ) 
    }

}
