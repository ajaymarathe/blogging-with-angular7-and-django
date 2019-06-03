import { Component, OnInit } from '@angular/core';
import { SlugifyPipe } from '../slugify.pipe';
import { PostService } from '../post.service';
import { Router } from "@angular/router"; 

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private slugify_pipe: SlugifyPipe, private post_service: PostService,private router: Router) { }

  title;
  body;


  ngOnInit() {
  }

  StorethePost(){
    const slug = this.slugify_pipe.transform(this.title)
    const storeData = [this.title, slug, this.body, 4, 6];
    console.log(storeData);

    this.post_service.StorePost(storeData)
    .subscribe(
      (response: Response) => {
        console.log(response);
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
      }
    )

  }

}
