import { Component } from "@angular/core";

@Component({
    selector:'class-list',
    templateUrl:'./class-list.component.html',
    styleUrls:['./class-list.component.css']

})

export class ClassListComponent{
    counter(i: number) {
        return new Array(i);
    }
    getRandomColor() {
        var color = Math.floor(0x1000000 * Math.random()).toString(16);
        return '#' + ('000000' + color).slice(-6);
      }
}