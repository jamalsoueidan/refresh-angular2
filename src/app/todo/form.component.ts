import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-todo-form",
  template: `
    <form #addForm="ngForm" (ngSubmit)="add(addForm)">
      <input #text type="text" name="text" id="text" minlength="5" ngModel required autofocus>
      <button type="submit">Add</button>
    </form>
  `
})
export class FormComponent {
  @ViewChild("text") text: ElementRef;
  @Output() onSubmit: EventEmitter<string> = new EventEmitter<string>();

  add(form: NgForm) {
    this.onSubmit.emit(form.value.text);
    form.reset();
    this.text.nativeElement.focus();
  }
}
