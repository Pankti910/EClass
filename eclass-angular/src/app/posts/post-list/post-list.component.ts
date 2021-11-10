import { Component, OnInit} from "@angular/core";
import {Post} from '../post.model'
import { PostsService } from "../posts.service";
import { Subscription } from 'rxjs'
@Component({
    selector:'post-list',
    templateUrl:'./post-list.component.html',
    styleUrls:['./post-list.component.css']
})
export class PostListComponent implements OnInit{
    posts:Post[]=[];
    private postsSub:Subscription | undefined;
   constructor(public postsService:PostsService){}
   ngOnInit(){
       this.posts=this.postsService.getPosts();
       this.postsSub=this.postsService.getPostUpdateListener().subscribe((posts:Post[])=>{
           this.posts=posts;

       });
   }
   ngOnDestroy(){
     this.postsSub?.unsubscribe();
   }
}