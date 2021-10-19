import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public toppings: string[] = [];
  public requests = '';

  setSelectedToppings(selectedToppings: string[]) {
    this.toppings = selectedToppings;
  }
}
