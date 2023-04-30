import {Component, OnInit} from '@angular/core';

@Component({
  selector:'app-heroes',
  templateUrl:'heroes.component.html',
  styleUrls:['./heroes.component.css']

})
export class heroesComponent implements OnInit {

  constructor(){};

ngOnInit(): void {
throw new Error('Method not implemented.');
}

}