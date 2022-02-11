import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  constructor(private _router: Router) { }

  onSubmit(form: NgForm) {
    this._router.navigate(['search', form.value.search]);
    form.reset({search: ''});
  }
}
