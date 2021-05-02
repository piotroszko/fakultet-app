import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { StudentsTableComponent } from "./students-table/students-table.component";
import { StudentFormComponent } from "./student-form/student-form.component";
import { SideNavBarComponent } from "./side-nav-bar/side-nav-bar.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    StudentsTableComponent,
    StudentFormComponent
  ],
  bootstrap: [AppComponent],
  exports: [MatSidenavModule]
})
export class AppModule {}
