import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginCredential } from '../model/login.model';
import { LoginService } from '../service/login.service';
import {Router} from '@angular/router';
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit {

    login!:LoginCredential;
    username!:string;
    password!:string;
    constructor(private loginService:LoginService,private router: Router) { }

    ngOnInit() { 
      this.username="";
      this.password="";
    }

    onLogin(){
        alert(this.username);
        alert(this.password);
        
         const d:LoginCredential=Object.assign({email:this.username,password:this.password});
     
         const role=localStorage.getItem('role');
         if(role=="Admin")
         {
            this.router.navigate(['/admin-users']);
         }
         else{
            this.router.navigate(['/class-list']);
         }
        this.loginService.login(d);
    }

}