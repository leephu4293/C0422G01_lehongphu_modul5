import { Injectable } from '@angular/core';
import {Todo} from "../todo";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/todos")
  }

  toggle(toggle: Todo){
    return this.httpClient.patch("http://localhost:3000/todos/"+toggle.id,toggle)
  }

  add(content: string){
    const todo: Todo = {
      content: content,
      complete: false
    }
    return this.httpClient.post("http://localhost:3000/todos",todo)
  }
}
