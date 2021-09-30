import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = `http://www.localhost:5000/tasks`
  constructor(private http: HttpClient) { }

  getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.url)
  }

  deleteTask(task :Task) : Observable<Task> {
    const deleteUrl = `${this.url}/${task.id}`
    return this.http.delete<Task>(deleteUrl)
  }

  toggleReminderTask(task :Task) : Observable<Task> {
    const toggleUrl = `${this.url}/${task.id}`
    const payload = {
      ...task,
      reminder: !task.reminder
    }
    return this.http.put<Task>(toggleUrl, payload)
  }
}
