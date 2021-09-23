import { Component,Input} from "@angular/core";

@Component({
    selector:'post-list',
    templateUrl:'./post-list.component.html',
    styleUrls:['./post-list.component.css']
})
export class PostListComponent{
   /*posts:any[]=[
       {title:"f1",content:'This is 1\'s post content'},
       {title:"f2",content:'This is 2\'s post content'},
       {title:"f3",content:'This is 3\'s post content'},
       {title:"f4",content:'This is 4\'s post content'}
   ]*/
   @Input() posts:any=[];
}