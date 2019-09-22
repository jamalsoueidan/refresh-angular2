import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Todo } from "./todo.interface";
import { map } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class TodoService {
  private url: string = "/assets/mockup-todos.json";
  private todos: Todo[];
  private data: BehaviorSubject<Todo[]>;
  private fakeId: number = 20;
  source: Observable<Todo[]>;

  constructor(private http: Http) {
    this.todos = [];
    this.data = new BehaviorSubject([]);
    this.source = this.data.asObservable(); //Hides the identity of an observable sequence.
  }

  load() {
    this.http
      .get(this.url)
      .pipe(map((res: Response) => res.json()))
      .subscribe(
        data => {
          this.todos = data.results;
          this.data.next([...this.todos]);
        },
        error => console.log("Could not load todos...")
      );
  }

  add(text: string) {
    const newTodo: Todo = {
      id: ++this.fakeId,
      text: text,
      completed: false
    };

    this.todos = [...this.todos, newTodo];
    this.data.next(this.todos);
  }

  delete(id: number) {
    this.todos = [...this.todos.filter(t => t.id !== id)];
    this.data.next(this.todos);
  }

  toggle(id: number) {
    let updateTodo = this.todos.find(t => t.id === id);
    updateTodo.completed = !updateTodo.completed;

    this.data.next([...this.todos.filter(t => t.id !== id), updateTodo]);
  }
}
