import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  StorePost(storeData){
    return this.http.post('http://localhost:8000/api/posts/',{
      "title": storeData[0],
      "slug": storeData[1],
      "body": storeData[2],
      "category": storeData[3],
      "user_id": storeData[4]
    });
  }

  DeletePost(id){
    return this.http.delete('http://localhost:8000/api/posts/'+id+'/');
  }
}
