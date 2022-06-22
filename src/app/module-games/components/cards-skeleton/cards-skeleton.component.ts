import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-skeleton',
  templateUrl: './cards-skeleton.component.html',
  styleUrls: ['./cards-skeleton.component.scss']
})
export class CardsSkeletonComponent {
  @Input() pageSize: number;

  public skeletons = [...Array(20)];

  constructor() { }

}
