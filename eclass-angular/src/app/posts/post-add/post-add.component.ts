import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Post} from '../post.model';
import { PostsService } from '../posts.service';
@Component({
    selector:'post-add',
    templateUrl:'./post-add.component.html',
    styleUrls:['./post-add.component.css']
})
    


export class PostAddComponent
{
    enteredContent='';
    enteredTitle='';


    constructor(public postsService:PostsService){}
    onPostAdd(form:NgForm)
    {
        //alert("G");
        if(form.invalid){
            return;
        }
        this.postsService.addPost(form.value.content);
        form.resetForm();
    }
  
    

   
}