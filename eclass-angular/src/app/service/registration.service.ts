import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Registration } from '../model/registration.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../model/message.model';


@Injectable({providedIn:'root'})
export class RegistrationService{

    m:Message | undefined;
    private apiUrl="http://localhost:9000/signup";
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http:HttpClient){}
    registration(registrationData:Registration){
        return this.http.post<{message:Message}>(this.apiUrl,registrationData,{observe: 'response'}).subscribe((data)=>{
            var obj=Object(data.body);
            var mObj=obj["messasge"]; 
            var msg=Object(mObj)["message"];
            console.log(msg);
        })
    }
}