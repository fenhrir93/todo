import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from "@angular/material/list";
import {TodoList} from "../../http/todo-http.service";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [CommonModule, MatListModule, MatCardModule, MatCheckboxModule, MatIconModule, MatButtonModule]
})
export class TodoListComponent {
  @Input() todoList: TodoList[] | null = [];
}
