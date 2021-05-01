import { Component } from "@angular/core";
import "rxjs/add/operator/map";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/retry";
import "rxjs/add/observable/of";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  ROOT_URL = "https://uwm-gr1.azurewebsites.net/api/Student";
  constructor() {}
}
