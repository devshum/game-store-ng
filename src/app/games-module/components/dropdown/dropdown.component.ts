import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() load = true;
  @Input() parameters: SelectItem[];
  @Input() selectedParamValue: string;

  @Output() sort: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private _activetedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  sortGames(): void {
    this._router.navigate([], { relativeTo: this._activetedRoute,
                                skipLocationChange: false,
                                queryParams: { ordering: this.selectedParamValue,
                                               page: '' } });
  }
}
