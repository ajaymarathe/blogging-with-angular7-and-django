import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  AllPost(){
    return this.http.get('http://localhost:8000/api/posts/');
  }

  SinglePost(id){
    return this.http.get('http://localhost:8000/api/posts/'+id+'/');
  }

  StorePost(){
    return this.http.post('http://localhost:8000/api/posts/',{

    });
  }

  DeletePost(id){
    return this.http.delete('http://localhost:8000/api/posts/'+id+'/');
  }
}
