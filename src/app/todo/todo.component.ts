import { Component, OnInit } from "@angular/core";
import { TodoService } from "./todo.service";
import { Todo } from "./todo.interface";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todos: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todos = todoService.source;
  }

  ngOnInit() {
    this.todoService.load();
  }

  notCompleted(todo: Todo): boolean {
    return !todo.completed;
  }

  completed(todo: Todo): boolean {
    return todo.completed;
  }

  onSubmit(text: string) {
    this.todoService.add(text);
  }

  onDelete(id: number) {
    this.todoService.delete(id);
  }

  onToggle(id: number) {
    this.todoService.toggle(id);
  }
}
