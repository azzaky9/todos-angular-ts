import { Component } from "@angular/core";
import { randomUUID } from "crypto";

interface Todo {
  id: string;
  name: string;
  createDate: Date | string;
  targetDate: Date | string;
};

@Component({
  selector: "todo-list",
  standalone: true,
  templateUrl: "./todo-list.component.html"
})
export class TodoListComponent {
  todos: Todo[] = [
    {
      id: randomUUID(),
      name: "Item 1",
      createDate: new Date().toLocaleDateString(),
      targetDate: new Date().toLocaleDateString()
    },
    {
      id: randomUUID(),
      name: "Item 2",
      createDate: new Date().toLocaleDateString(),
      targetDate: new Date().toLocaleDateString()
    }
  ];
}
