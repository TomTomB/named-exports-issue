import { Component } from '@angular/core';
import { fromFoo } from './stuff';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'named-exports-issue';

  foo = fromFoo.bar;
}
