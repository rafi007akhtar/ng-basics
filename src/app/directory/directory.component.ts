import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  name: string;
  bem = {'em': true, 'b': true, u: 'false'};  // style classes for attribute directive

  bool = [false, true];
  showText = this.bool[Math.floor(Math.random()*2)];  // picks one of the bool members at random; for structural binding
  
  league = ["superman", "batman", "wonder woman", "the flash", "martian manhunter", "green lantern", "hawkgirl"];

  constructor(private route: ActivatedRoute) {
    this.name = route.snapshot.params["name"];
  }

  ngOnInit() {
  }

}
