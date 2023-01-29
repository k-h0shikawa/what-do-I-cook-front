import { Component } from '@angular/core';
import { Recipe } from '../recipt';
import { ApiCallService } from '../api-call.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  recipts: Recipe[] = []; 

  constructor(private apiCallService: ApiCallService){}

  ngOnInit(): void{
    this.getRecipts(); 
  }

  getRecipts(): void{
    this.apiCallService.getRecipts().subscribe(recipts => {
      this.recipts = recipts
      });
  }
}
