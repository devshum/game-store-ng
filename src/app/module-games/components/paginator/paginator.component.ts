import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() currentPage: number;
  @Input() pageSize: number;
  @Input() totalGames: number;

  constructor(
    private _activetedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  public paginate(event: any) {
    this.currentPage = event.page + 1;

    this._router.navigate([], { relativeTo: this._activetedRoute,
                                skipLocationChange: false,
                                queryParams: { ordering: '',
                                               page: this.currentPage } });
  }
}
