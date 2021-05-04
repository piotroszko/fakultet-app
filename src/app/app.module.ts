import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { StudentsTableComponent } from "./students-table/students-table.component";
import { StudentFormComponent } from "./student-form/student-form.component";
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    StudentsTableComponent,
    StudentFormComponent,
    NavigationBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
