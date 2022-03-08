import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList';

  public items = [];
  public newTask;

  public add() {
    if (this.newTask != '') {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }

  public delete(i) {
    this.items.splice(i, 1);
  }
}