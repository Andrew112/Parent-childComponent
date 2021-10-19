import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {

  @Input() requests: string = '';
  @Output() selectedToppingsEmitter = new EventEmitter<string[]>();

  private selectedToppings: string[] = [];
  public toppings = [
    "Pepperoni",
    "Mushrooms",
    "Onions",
    "Sausage",
    "Bacon",
    "Extra cheese",
    "Black olives",
    "Green peppers"
  ];

  public checkValue(event: Event) {
    const checkbox: HTMLInputElement | null = (event.target as HTMLInputElement);
    if (checkbox) {
      if (checkbox.checked) {
        this.selectedToppings.push(checkbox.value);
      } else {
        const index = this.selectedToppings.indexOf(checkbox.value);
        this.selectedToppings.splice(index, 1);
      }
      this.selectedToppingsEmitter.emit(this.selectedToppings);
    }
  }
}