import { Component } from '@angular/core';
import { OwnIngredients } from '../own-ingredients';

@Component({
  selector: 'app-own-ingredients',
  templateUrl: './own-ingredients.component.html',
  styleUrls: ['./own-ingredients.component.css']
})
export class OwnIngredientsComponent {
  ownIngredients:OwnIngredients = {
    id: 1,
    name: "カニ"
  };
}
