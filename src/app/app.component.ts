import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'select-inline';

  animals = [
    {name: 'Cat'},
    {name: 'Dog'},
    {name: 'Bird'}
  ];

  onSelect($event) {
    let values = $event.map(option => option.selected);
    console.log(values)
  }
}
