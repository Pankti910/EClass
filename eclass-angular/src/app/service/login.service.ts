import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import { LoginCredential } from "../model/login.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from "@angular/compiler/src/i18n/i18n_ast";


@Injectable({providedIn:'root'})
export class LoginService{
    m:Message | undefined;
    accessLogin!:string;
    private apiUrl="http://localhost:9000/";
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    constructor(private http:HttpClient){}

    login(loginCredential:LoginCredential){
        return this.http.post<{message:Message}>(this.apiUrl,loginCredential,{observe: 'response'}).subscribe((data)=>{
                //this.m=data.body?.message;
                //alert(data["message"]);
                var obj=Object(data.body);
                var mObj=obj["messasge"]; 
                var role=Object(mObj)["message"];
                localStorage.setItem('role', role);
                console.log(role);
            });
    }
 
}