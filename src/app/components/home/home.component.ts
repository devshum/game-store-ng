import { Component, OnInit } from '@angular/core';
import { Param, simpleFilterOptions } from 'src/app/core/models/filters.interface';
import { SelectItem } from 'primeng/api';
import { GamesService } from 'src/app/core/services/games.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Game } from 'src/app/core/models/game.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  parameters: SelectItem[];
  selectedParam: Param;
  games: Game[];
  count: number;

  constructor(
    private _gamesService: GamesService,
    private _activetedRoute: ActivatedRoute
  ) {
    this.parameters = simpleFilterOptions;
  }

  ngOnInit(): void {
    this._activetedRoute.params.subscribe((params: Params) => {
      if(params['game-search']) {
        this.searchGames('metacritic', params['game-search']);
      } else {
        this.searchGames('metacritic');
      }
    });
  }

  searchGames(sort: string, search?: string): void {
    this._gamesService
      .getGames(sort, search)
      .subscribe(data => {
        this.games = data.results;
        this.count = data.count;
    });
  }
}
