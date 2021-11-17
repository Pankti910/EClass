import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Registration } from "../model/registration.model";
import { RegistrationService } from "../service/registration.service";

@Component({
    selector:'registration',
    templateUrl:'./registration.component.html',
    styleUrls:['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    
    registration!:Registration;
    fname!:String;
    lname!:String;
    email!:String;
    password!:String;
    constructor(private registrationService:RegistrationService,private router: Router) { }

    ngOnInit() { 

        this.fname="";
        this.lname="";
        this.email="";
        this.password="";


    }

    onRegistration(){
        alert(this.fname);
    }
}