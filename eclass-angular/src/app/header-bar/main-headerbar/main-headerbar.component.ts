import { Component, OnInit } from "@angular/core";

@Component({
    selector:'main-headerbar',
    templateUrl:'./main-headerbar.component.html',
    styleUrls:['./main-headerbar.component.css']
})

export class MainHeaderBarComponent implements OnInit{
    displayModeOfSetting:boolean=false;
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    createNewClass(){
       if(!this.displayModeOfSetting){
           this.displayModeOfSetting=true;
       }
       else{
           this.displayModeOfSetting=false;
       }
    }

    
}