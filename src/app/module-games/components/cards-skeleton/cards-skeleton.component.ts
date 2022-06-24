import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-skeleton',
  templateUrl: './cards-skeleton.component.html',
  styleUrls: ['./cards-skeleton.component.scss']
})
export class CardsSkeletonComponent implements OnInit {
  @Input() pageSize: number;

  public skeletons: string[];

  ngOnInit(): void {
    this.skeletons = [...Array(this.pageSize)];
  }
}
