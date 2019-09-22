import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { FilterPipe } from "../pipes/filter.pipe";
import { SortPipe } from "../pipes/sort.pipe";
import { ReversePipe } from "../pipes/reverse.pipe";

import { TodoComponent } from "./todo.component";
import { FormComponent } from "./form.component";
import { ItemComponent } from "./item.component";
import { TodoService } from "./todo.service";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [
    FilterPipe,
    SortPipe,
    ReversePipe,
    TodoComponent,
    FormComponent,
    ItemComponent
  ],
  providers: [TodoService]
})
export class TodoModule {}
