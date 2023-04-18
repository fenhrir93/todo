import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, pluck} from "rxjs";

export interface TodoList {
  id: number,
  title: string,
  description: string,
  time: {
    from: string,
    to: string
  }
  completed: boolean
}
@Injectable()
export class TodoHttpService {

  constructor(private http: HttpClient) {
  }

  getTodoList() {
   return this.http.get<TodoList[]>('../assets/todo.mock.json');
  }
}
