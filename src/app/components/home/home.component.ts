import { Component, OnInit } from '@angular/core';
import { Param } from 'src/app/core/models/filters.interface';
import { ParamsLabels } from 'src/app/core/enums/params.labels';
import { ParamsValues } from 'src/app/core/enums/params.values';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  parameters: Param[];
  selectedParam: Param;

  constructor() {
    this.parameters  = [
      { label: ParamsLabels.sort, value: null },
      { label: ParamsLabels.name, value: ParamsValues.name },
      { label: ParamsLabels.released, value: ParamsValues.released },
      { label: ParamsLabels.added, value: ParamsValues.added },
      { label: ParamsLabels.created, value: ParamsValues.created },
      { label: ParamsLabels.updated, value: ParamsValues.updated },
      { label: ParamsLabels.rating,  value: ParamsValues.rating },
      { label: ParamsLabels.metacritic, value: ParamsValues.metacritic }
    ];
  }

  ngOnInit(): void {
  }
}
