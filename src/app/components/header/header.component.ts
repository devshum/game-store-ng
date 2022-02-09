import { LoaderService } from './../../core/services/loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public load = true;

  constructor(private _loaderService: LoaderService) { }

  ngOnInit(): void {
    this._loaderService.loadingStatus.subscribe((isLoad: boolean) => this.load = isLoad);
  }
}
