import {Routes} from '@angular/router'
import {DogDetailsComponent} from  './dog-details-component'
import {DogListComponent} from './dog-list-component'

// Route Configuration
export const dogRoutes:Routes=[
    {path :'dogs',component:DogListComponent},
    {path:'dogs/id',component:DogDetailsComponent}
]
