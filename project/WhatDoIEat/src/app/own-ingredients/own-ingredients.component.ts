import { Component } from '@angular/core';
import { OwnIngredients } from '../own-ingredients';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-own-ingredients',
  templateUrl: './own-ingredients.component.html',
  styleUrls: ['./own-ingredients.component.css']
})
export class OwnIngredientsComponent {

  form: FormGroup = this.fb.group({});
  inputs: FormArray = this.fb.array([]);

  constructor(private fb: FormBuilder) {}

  // 初期表示は単一の入力フォーム
  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm(): FormGroup{
    return this.fb.group({
      ownIngredients: this.fb.array([])
    });
  }


  /** FormArrayに挿入するデータの形式を返すgetterメソッド*/
  get ownIngredientNameForm(): FormGroup{
    return this.fb.group({
      ownIngredientName: ['']
    });
  }

  /** 所持している食材を返すgetterメソッド */ 
  get ownIngredients(): FormArray{
    return this.form.get('ownIngredients') as FormArray;
  }

  //** 入力フォームを追加 */
  addOwnIngredient() {
    this.ownIngredients.push(this.ownIngredientNameForm);
  }

  //** 入力フォームを削除 */
  removeOwnIngredient(index: number){
    this.ownIngredients.removeAt(index)
  }
}
