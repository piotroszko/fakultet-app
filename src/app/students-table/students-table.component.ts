import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-students-table",
  templateUrl: "./students-table.component.html",
  styleUrls: ["./students-table.component.css"]
})
export class StudentsTableComponent implements OnInit {
  @Input()
  url: string;

  posts: Observable<any>;
  newPost: Observable<any>;

  constructor(private http: HttpClient) {}

  getPosts() {
    this.posts = this.http.get(this.url);
  }
  ngOnInit() {
    this.getPosts();
  }
}
