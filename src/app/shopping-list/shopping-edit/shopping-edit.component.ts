import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingName') ingNameRef: ElementRef;
  @ViewChild('ingAmount') ingAmountRef: ElementRef;
  
 

  constructor(private shoppingListService: ShoppingListService) {
   }

  ngOnInit() {
   
  }

  onAddItem() {
    const name = this.ingNameRef.nativeElement.value;
    const amount = this.ingAmountRef.nativeElement.value;
    const ingredient = new Ingredient(name, amount);

    this.shoppingListService.pushIngredient(ingredient);
    
  }
}
