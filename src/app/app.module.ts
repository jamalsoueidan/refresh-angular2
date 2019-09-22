import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { TodoModule } from "./todo/todo.module";

import { TodoComponent } from "./todo/todo.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ContactComponent } from "./contact/contact.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TodoModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
