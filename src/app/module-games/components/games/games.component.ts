import { Component, OnDestroy, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Subject, Observable, combineLatest } from 'rxjs';
import { tap, map, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as GamesAction from '../../store/games/games.actions';
import { AppState } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent implements OnInit, OnDestroy {
  public games$: Observable<any>;
  public parameters: SelectItem[];
  public title: string;
  public totalGames: number;
  public searchedGameTitle: string;
  public pageSize: number;
  public currentPage: number;
  public selectedParamValue: string;
  public search: string;
  public loading: boolean;

  private _unsubscribe$: Subject<any> = new Subject<any>();

  constructor(
    private _store: Store<AppState>,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.games$ = this._store.select('gamesResponse').pipe(
      tap(gamesState => {
        this.totalGames = gamesState.gamesResponse.count;
        this.title = gamesState.gamesResponse.seo_title;
        this.loading = gamesState.loading;
      }),
      map(gamesState => gamesState.gamesResponse.results)
    );

    combineLatest(
      [
        this._store.select('sorting'),
        this._store.select('pagination')
      ]
    )
    .pipe(
      map(([sorting, pagination]) => ({sorting, pagination})),
      takeUntil(this._unsubscribe$)
    ).subscribe(({sorting, pagination}) => {
      this.currentPage = pagination.currentPage;
      this.pageSize = pagination.pageSize;
      this.selectedParamValue = sorting.sorting;
      this.search = sorting.search;

      this._router.navigate(
        ['games', this.search],
        { queryParams: { ordering: this.selectedParamValue, page: this.currentPage } }
      );

      const queries = {
        ordering: this.selectedParamValue,
        pageSize: this.pageSize,
        currentPage: this.currentPage,
        search: this.search
      };

      this._store.dispatch(
        GamesAction.fetchGames({queries})
      );
    });
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
  }
}
