import { Component } from '@angular/core';
import { OwnIngredients } from '../own-ingredients';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-own-ingredients',
  templateUrl: './own-ingredients.component.html',
  styleUrls: ['./own-ingredients.component.css']
})
export class OwnIngredientsComponent {
  ownIngredients:OwnIngredients = {
    name: "カニ"
  };

  form: FormGroup = this.fb.group({});
  inputs: FormArray = this.fb.array([]);




  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      inputs: this.fb.array([])
    });
    this.inputs = this.form.get('inputs') as FormArray;
  }

  addInput() {
    this.inputs.push(this.fb.control(''));
  }
}
