// ==========.app/cats/cats.component.ts ===============

// Import component decorator
import {Component,OnInit} from '@angular/core';
import {PetService} from '../Pet.service';
import {Observable} from 'rxjs/Observable';
import {Pet} from '../pet';
@Component({
    template:' <h2>Cats</h2>'+
   '<p>List of cats</p>'+
    '<ul class="demo-list-icon mdl-list">'+
      '<li class="mdl-list__item" *ngFor="let cat of cats | async">'+
        '<span class="mdl-list__item-primary-content">'+
           '<i class="material-icons mdl-list__item-icon">pets</i>'+
            '<a [routerLink]="["/cats", cat.id.$t]">{{cat.name.$t}}</a>'+
        '</span>'+
      '</li>'+
    '</ul>'
})

//component class

export class CatListComponent implements OnInit{

  //private property for binding
  cats:Observable<Pet[]>;

  constructor (private petService:PetService){

  }
   // Load data ones componet is ready
  ngOnInit() {
    // Pass retreived pets to the property
    this.cats = this.petService.findPets('cat');
  }

}