import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingName') ingNameRef: ElementRef;
  @ViewChild('ingAmount') ingAmountRef: ElementRef;
  
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {
   }

  ngOnInit() {
   
  }

  onAddItem() {
    const name = this.ingNameRef.nativeElement.value;
    const amount = this.ingAmountRef.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    console.log(ingredient);
     this.ingredientAdded.emit(new Ingredient(name, amount));
  }
}
