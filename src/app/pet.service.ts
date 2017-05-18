// ======= ./app/pet.service.ts =============

//imports
import {Injectable} from '@angular/core';
import {Jsonp,URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PetService{

//class constructor with jsonp injected
constructor(private Jsonp:Jsonp){}

//baseurl for petfinder api
private petsUrl = 'http://api.petfinder.com/';

//get a list if pets based on animal
findPets(animal:string){

// End point for list of pets:
    // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
    const endPoint = 'pet.find'

    // URLSearchParams makes it easier to set query parameters and construct URL
    // rather than manually concatenating
    let params = new URLSearchParams();
    params.set('key','[API_KEY]');
     params.set('location', 'texas');
    params.set('animal', animal);
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    // return response 

    return this.Jsonp
            .get(this.petsUrl + endPoint,{search:params})
            .map(response => <string[]> response.json().petfinder.pets.pet);
} 

//get a pet based on their id
findPetById(id:string) {

      // End point for list of pets:
    // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
    const endPoint = 'pet.get'

    // End point for list of pets:
    // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
   let params = new URLSearchParams();
     params.set('key', '[API_KEY]');
    params.set('id', id);
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.Jsonp
    .get(this.petsUrl + endPoint,{search:params})
     .map(response => <string[]> response.json().petfinder.pet);
}

}
