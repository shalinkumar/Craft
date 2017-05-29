
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

// Material 2 
import { MdCoreModule } from '@angular2-material/core'
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdRadioModule } from '@angular2-material/radio';
import { MdCheckboxModule } from '@angular2-material/checkbox'
import { MdTooltipModule } from '@angular2-material/tooltip';
import { MdSliderModule } from '@angular2-material/slider';
import  'hammerjs' 

// appcomponent declarations 
import { AppComponent } from './app.component';
import {CatListComponent} from './cats/cat-list-component';
import {CatDetailsComponent} from './cats/cat-details-component';
import {DogListComponent} from './dogs/dog-list-component';
import {DogDetailsComponent} from './dogs/dog-details-component';
import {PetService} from './pet.service';
import { Pet }          from './pet';
import {routing} from './app.routes'

//Decorator 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,MdCoreModule, MdCardModule, MdButtonModule, MdRadioModule,
MdCheckboxModule, MdTooltipModule, MdSliderModule
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
