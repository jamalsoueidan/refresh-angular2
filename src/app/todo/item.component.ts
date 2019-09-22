import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "./todo.interface";

@Component({
  selector: "app-todo-item",
  template: `
    <li [ngClass]="{'completed': todo.completed}">
      <span>{{todo.text}} </span>

      <a (click)="delete(todo.id)"  *ngIf="!todo.completed">Delete</a>
      <a (click)="toggle(todo.id)">{{ todo.completed ? "Undo" : "Complete" }}</a>
    </li>
  `,
  styles: [
    `
      li a {
        text-decoration: underline;
        cursor: pointer;
      }
    `,
    `
      li.completed span {
        text-decoration: line-through;
      }
    `
  ]
})
export class ItemComponent {
  @Input() todo: Todo;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onToggle: EventEmitter<number> = new EventEmitter<number>();

  delete(id: number) {
    this.onDelete.emit(id);
  }

  toggle(id: number) {
    this.onToggle.emit(id);
  }
}
