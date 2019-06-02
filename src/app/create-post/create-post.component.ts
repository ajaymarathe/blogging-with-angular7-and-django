import { Component, OnInit } from '@angular/core';
import { SlugifyPipe } from '../slugify.pipe';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private slugify_pipe: SlugifyPipe,) { }

  title;
  body;
  category_id;
  user_id;


  ngOnInit() {
  }

  StorethePost(){
    const slug = this.slugify_pipe.transform(this.title)
    console.log(slug);
    // const storeData = { name: "John", age: 30, city: "New York" };
  }

}
