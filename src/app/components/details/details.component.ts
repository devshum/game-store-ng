import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  gameRating = 0;
  constructor() { }

  getColor(value: number): string {
    switch (true) {
      case value > 75:
        return '#5ee432';
      case value > 50:
        return '#fffa50';
      case value > 30:
        return '#f7aa38';
      default:
        return '#ef4655';
    }
  }
}
