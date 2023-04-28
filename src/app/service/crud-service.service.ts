import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private http:HttpClient) {}
  
  apiUrl1 = "http://localhost:3000/get_task"
  apiUrl2 = "http://localhost:3000/post_task"
  apiUrl3 = "http://localhost:3000/get_task/id"


  getAllTask():Observable<any>{
    return this.http.get<Task[]>(`${this.apiUrl1}`)
  }

  addTask(task:any):Observable<any>{
    return this.http.post(`${this.apiUrl2}`,task);
  }

  deleteTask(id:any):Observable<any>{
    let ids = id;
    return this.http.delete(`${this.apiUrl1}/${ids}`);
  }
  
 

  // deleteTask(task : Task) : Observable<Task> {
  //   return this.http.delete<Task>(this.serviceURL2+'/'+task.id); //delete one task
  // }

  // editTask(task : Task) : Observable<Task> {
  //   return this.http.put<Task>(this.serviceURL+'/'+task.id,task);
  // }
}
