import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title="eclass-angular";
  constructor(private router: Router){}
  ngOnInit(): void {
  
    if(localStorage.getItem('role')=="Admin"){
      this.router.navigate(['/admin-users']);
    }
    else if (localStorage.getItem('role')=="Non-Admin"){
      this.router.navigate(['/class-list']);
    }
 
   
}

  
}

