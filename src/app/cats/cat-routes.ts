
import {Routes} from  '@angular/router';
import {CatDetailsComponent} from './cat-details-component';
import {CatListComponent} from './cat-list-component';

// Route Configuration
export const catRoutes:Routes=[
     { path: 'cats', component: CatListComponent },
     { path: 'cats/:id', component: CatDetailsComponent } 
]