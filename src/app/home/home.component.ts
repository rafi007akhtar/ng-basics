import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  secretIdentity: string = "Owlman";

  // form elements
  namePh: string = "Enter your name";
  need: boolean = true;
  noneed: boolean = false;
  echo: string = "";

  submit() {
    alert("Cool!");
  }

  @Input() color;  // import the color property from app-root as property binding

  @Output() onYell = new EventEmitter();
  yell(e) {
    this.onYell.emit(e);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
