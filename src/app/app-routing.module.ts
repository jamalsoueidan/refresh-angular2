import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodoComponent } from "./todo/todo.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ContactComponent } from "./contact/contact.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: "todo", component: TodoComponent },
  {
    path: "contact",
    component: ContactComponent,
    data: { title: "Heroes List" }
  },
  {
    path: "",
    component: HomeComponent
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
