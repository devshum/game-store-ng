import { LoaderService } from '../../../core/services/loader.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { simpleFilterOptions } from 'src/app/core/models/filters.interface';
import { SelectItem } from 'primeng/api';
import { GamesService } from 'src/app/core/services/games.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/core/models/game.interface';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  public parameters: SelectItem[];
  public selectedParamValue = '-added';
  public games: Game[];
  public count: number;
  public title: string;
  public pageSize = 21;
  public load = true;
  public skeletons = [...Array(this.pageSize)];
  public pageCount: number;
  public currentPage = 1;
  public searchedGameTitle: string;

  private _unsubscribe = new Subject();

  constructor(
    private _gamesService: GamesService,
    private _activetedRoute: ActivatedRoute,
    private _loaderService: LoaderService,
    private _router: Router
  ) {
    this.parameters = simpleFilterOptions;
  }

  ngOnInit(): void {
    this._loaderService.loadingStatus.pipe(takeUntil(this._unsubscribe))
                                     .subscribe((isLoad: boolean) => this.load = isLoad);

    combineLatest([this._activetedRoute.params, this._activetedRoute.queryParams])
      .pipe(map(results => ({params: results[0]['game-search'],
                            queryParams: results[1]})))
      .pipe(takeUntil(this._unsubscribe))
      .subscribe(results => {
        this.currentPage = results.queryParams.page || this.currentPage;
        this.selectedParamValue = results.queryParams.ordering || this.selectedParamValue;

        if(results.params) {
          this.searchGames(this.selectedParamValue, this.pageSize, this.currentPage, results.params);
          this.searchedGameTitle = this.firstToUpper(results.params);
        } else {
          this.searchGames(this.selectedParamValue, this.pageSize, this.currentPage);
        }
      });
  }

  searchGames(sort: string, pageSize: number, currentPage: number, search?: string): void {
    this._router.navigate([], { relativeTo: this._activetedRoute,
                                skipLocationChange: false,
                                queryParams: { ordering: this.selectedParamValue,
                                               page: this.currentPage } });

    this._loaderService.start();
    this._gamesService
      .getGames(sort, pageSize, currentPage, search)
      .pipe(takeUntil(this._unsubscribe))
      .subscribe(data => {
        this.pageCount = data.count;
        this.games = data.results;
        this.count = data.count;
        this.title = data.seo_title;
        this._loaderService.end();
    });
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
  }

  firstToUpper(params: string) {
    return params.charAt(0).toUpperCase() + params.slice(1);
  }
}
