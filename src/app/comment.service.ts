import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  GetComments(){
    return this.http.get('http://localhost:8000/api/comments/');
  }
}
