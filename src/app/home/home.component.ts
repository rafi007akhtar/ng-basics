import { Component, OnInit } from '@angular/core';

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

  submit() {
    alert("Cool!");
  }
  
  constructor() { }

  ngOnInit() {
  }

}
