import { Component, OnDestroy, OnInit } from '@angular/core';
import { simpleFilterOptions } from 'src/app/core/models/filters.interface';
import { SelectItem } from 'primeng/api';
import { GamesService } from 'src/app/core/services/games.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Game } from 'src/app/core/models/game.interface';
import { Subscription } from 'rxjs';
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
  private _routeSub: Subscription;
  private _gameSub: Subscription;

  constructor(
    private _gamesService: GamesService,
    private _activetedRoute: ActivatedRoute
  ) {
    this.parameters = simpleFilterOptions;
  }

  ngOnInit(): void {
    this._routeSub = this._activetedRoute.params.subscribe((params: Params) => {
      if(params['game-search']) {
        this.searchGames(this.selectedParamValue, this.pageSize, params['game-search']);
      } else {
        this.searchGames(this.selectedParamValue, this.pageSize);
      }
    });
  }

  searchGames(sort: string, pageSize: number, search?: string): void {
    this._gameSub = this._gamesService
    .getGames(sort, pageSize, search)
    .subscribe(data => {
      this.games = data.results;
      this.count = data.count;
      this.title = data.seo_title;
    });
  }

  ngOnDestroy(): void {
    if (this._routeSub) {
      this._routeSub.unsubscribe();
    }

    if (this._gameSub) {
      this._gameSub.unsubscribe();
    }
  }
}
