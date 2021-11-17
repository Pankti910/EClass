import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'class-list',
    templateUrl:'./class-list.component.html',
    styleUrls:['./class-list.component.css']

})

export class ClassListComponent implements OnInit{
    allow!:String;
    constructor(private router: Router){}
    ngOnInit(): void {
        
        const role= localStorage.getItem('role');;
       
        if(role=="Non-Admin") this.allow="Yes";
        else this.allow="No";
    }
    counter(i: number) {
        return new Array(i);
    }
    getRandomColor() {
        var color = Math.floor(0x1000000 * Math.random()).toString(16);
        return '#' + ('000000' + color).slice(-6);
      }
      redirectToPage(){
          
        if(localStorage.getItem('role')==null){
            this.router.navigate(['/']);
        }
        else{
          this.router.navigate(['/admin-users']);
        }
    }
 
}