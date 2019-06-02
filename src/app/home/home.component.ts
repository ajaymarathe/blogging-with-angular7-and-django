import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private post_service: PostService) { }

  posts;
  responseData;

  ngOnInit() {
    this.Post();
  }

  Post(){
    this.post_service.AllPost()
    .subscribe(
      (response: Response) => {
        this.responseData = response;
        this.posts = Object.keys(this.responseData.objects).map((keys) => this.responseData.objects[keys])
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

}
