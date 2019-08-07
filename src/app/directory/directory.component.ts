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

  constructor(private route: ActivatedRoute) {
    this.name = route.snapshot.params["name"];
  }

  ngOnInit() {
  }

}
