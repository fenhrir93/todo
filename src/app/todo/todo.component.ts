import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {TodoHttpService, TodoList} from "../http/todo-http.service";
import {Observable} from "rxjs";
import {MatListModule} from "@angular/material/list";
import {TodoListComponent} from "./todo-list/todo-list.component";

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  imports: [CommonModule, MatCardModule, MatListModule, TodoListComponent],
  providers: [TodoHttpService]
})
export class TodoComponent implements OnInit {
  todoList = new Observable<TodoList[]>()
    constructor(private todoHttpService: TodoHttpService) {

    }

    ngOnInit() {
      this.todoList = this.todoHttpService.getTodoList();
    }
}
