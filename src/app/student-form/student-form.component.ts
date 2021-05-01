import { Component, Input, OnInit } from "@angular/core";
import { Post } from "../post";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.css"]
})
export class StudentFormComponent implements OnInit {
  @Input()
  url: string;

  posts: Observable<any>;
  newPost: Observable<any>;
  formPost: Post = { id: "", surname: "", name: "", index: "" };

  constructor(private http: HttpClient) {}

  ngOnInit() {}
  createPost() {
    const data: Post = {
      id: this.formPost.id,
      name: this.formPost.name,
      surname: this.formPost.surname,
      index: this.formPost.index
    };
    const data2: Post = {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
      name: "Ppppp",
      surname: "Xxxxx",
      index: "12121212"
    };
    this.newPost = this.http
      .post(this.url, data2)
      .retry(3)
      .catch(err => {
        console.log(err);
        return Observable.of(err);
      });
  }
}
