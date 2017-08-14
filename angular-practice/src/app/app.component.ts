import { Component } from '@angular/core';


export class Player {
  id: number;
  name: string;
}

@Component({
  selector: 'angular-practice',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: ` <h1>{{title}}</h1>
  <h2>{{player.name}} details!</h2>
  <div><label>id: </label>{{player.id}}</div>
  <div>
  <label>name: </label>
  <input [(ngModel)]="player.name" placeholder="name">
</div>
  `
})

export class AppComponent {
  title = 'Tour of Cricketers';
  player: Player = {
    id: 1,
    name: 'Dhoni'
  }
}
