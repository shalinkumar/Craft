// =====.app/app.routes.ts =======

//Base route configuration

// Imports
// Deprecated import 

import {ModuleWithProviders }from '@angular/core';
import {Routermodule,Routes} from '@angular/router';
import {CatListComponent} from './cats/cat-list.component';
import {DogListComponent} from './dogs/dog-list.component';


// We then define an array of routes which is of type Routes 
//then use RouterModule.forRoot to export the routes so it 
//can be injected in our application when bootstrapping

//route configuration
export const routes:Routes=[
    {path:'cats',component:CatListComponent},
    {path:'dogs',component:DogListComponent}
];

export const routing: ModuleWithProviders = Routermodule.forRoot(routes);

