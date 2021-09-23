import { Component,EventEmitter, Output } from '@angular/core';

@Component({
    selector:'post-add',
    templateUrl:'./post-add.component.html',
    styleUrls:['./post-add.component.css']
})
    


export class PostAddComponent
{
    enteredContent='';
    enteredTitle='';
    @Output() postAdded=new EventEmitter();


    onPostAdd()
    {
        
      const post={
          title:this.enteredTitle,
          content:this.enteredContent
        };
        this.postAdded.emit(post);
        this.enteredContent="";
        this.enteredTitle="";
    }
}