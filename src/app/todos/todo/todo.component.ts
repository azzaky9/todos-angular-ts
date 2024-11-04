import { Component } from "@angular/core";
import { TodoListComponent } from "../todo-list/todo-list.component";

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  imports: [TodoListComponent, TodoListComponent],
})
export class TodoAppComponent {
  title = "Angular Todo's App";
}
