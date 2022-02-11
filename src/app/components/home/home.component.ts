import { LoaderService } from './../../core/services/loader.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { simpleFilterOptions } from 'src/app/core/models/filters.interface';
import { SelectItem } from 'primeng/api';
import { GamesService } from 'src/app/core/services/games.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Game } from 'src/app/core/models/game.interface';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  public first = 1;
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
    this._loaderService.loadingStatus.subscribe((isLoad: boolean) => this.load = isLoad);

    this._activetedRoute.params.pipe(takeUntil(this._unsubscribe)).subscribe((params: Params) => {
      this._activetedRoute.queryParams.subscribe((query: Params) => {
        this.currentPage = query.page || 1;

        if(params['game-search']) {
          this.searchGames(this.selectedParamValue, this.pageSize, this.currentPage, params['game-search']);
          this.searchedGameTitle = params['game-search'];
        } else {
          this.searchGames(this.selectedParamValue, this.pageSize, this.currentPage);
        }
      });
    });
  }

  searchGames(sort: string, pageSize: number, currentPage: number, search?: string): void {
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

  paginate(event: any) {
    this.first = event.first;
    this.currentPage = event.page + 1;

    this._router.navigate([], { relativeTo: this._activetedRoute,
                                skipLocationChange: false,
                                queryParams: { page: this.currentPage} });
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
  }
}
