import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // the tag inside index.html that will extend to templateUrl
  templateUrl: './app.component.html',  // extends from <app-root> document, and builds more html on top of it
  styleUrls: ['./app.component.css']  // for styling templateUrl
})
export class AppComponent {  // export means the `class` is available outside of this file
  title = 'ng-basics';  // jinja properties available to templateUrl, accessible as {{}}
}
