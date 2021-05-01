import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
  constructor(private http: HttpClient) {}
  // createPost() {
  //   const data: Post = {
  //     id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     surname: "Test1",
  //     name: "Piotr",
  //     index: "12121212"
  //   };

  //   this.newPost = this.http
  //     .post(this.ROOT_URL, data)
  //     .retry(3)
  //     .catch(err => {
  //       console.log(err);
  //       return Observable.of(err);
  //     });
  // }
}
