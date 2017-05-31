
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

// Material 2 

import  'hammerjs' 
import { MaterialModule,MdInputModule,MdCardModule,MdButtonModule,MdTabsModule } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// appcomponent declarations 
import { AppComponent } from './app.component';
import {CatListComponent} from './cats/cat-list-component';
import {CatDetailsComponent} from './cats/cat-details-component';
import {DogListComponent} from './dogs/dog-list-component';
import {DogDetailsComponent} from './dogs/dog-details-component';
import {PetService} from './pet.service';
import { Pet }          from './pet';
import {routing} from './app.routes'
import { CarouselModule } from 'angular4-carousel';

//Decorator 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    MaterialModule,
MdInputModule,MdCardModule,BrowserAnimationsModule,CarouselModule,MdButtonModule
  ],
  declarations: [
    AppComponent,
    CatListComponent,
    CatDetailsComponent,
    DogListComponent,  
    DogDetailsComponent,
  ],  
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule {
  //module class
  
 }
