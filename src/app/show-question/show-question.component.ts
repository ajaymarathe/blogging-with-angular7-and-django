import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { CommentService } from '../comment.service';

import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css']
})
export class ShowQuestionComponent implements OnInit {

  constructor(
      private post_service: PostService,
      private route: ActivatedRoute,
      private location: Location,
      private comment_service: CommentService
      ) { }


  post;
  responseDAta;
  comments;

  ngOnInit() {
    this.GetPost();
    this.Post_comment();
  }


  GetPost(){
    const id = this.route.snapshot.params.id;

    this.post_service.SinglePost(id)
    .subscribe(
      (response: Response) => {
        this.post= response;
        console.log(this.post);
      },
      (error) =>{
        this.location.back();
        console.log(error)
      }
    )
  }

  // delete the post
  DeletethePost(id){
    console.log(id);

    this.post_service.DeletePost(id)
    .subscribe(
      (response: Response) =>{
        console.log(response);
        this.location.back();
      },
      (error) => {
        this.location.back();
        console.log(error)
      }
    )
  }

  Post_comment(){ 
    this.comment_service.GetComments()
    .subscribe(
      (response: Response)=>{
        this.responseDAta = response;
        console.log(response);
        this.comments = Object.keys(this.responseDAta.objects).map((keys) => this.responseDAta.objects[keys])
      },
      (error) => {
        console.log(error);
      }
    )
  }



}
