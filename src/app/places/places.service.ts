import { place } from './place-detail/place.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  
  public places: place[] = [
    {
      id: '1',
      title: 'Eiffel tower',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Torre_Eiffel_at_night.jpg/173px-Torre_Eiffel_at_night.jpg',
      comments: ['awesome places', 'wonderful experience']
    },
    {
      id: '2',
      title: 'status of liberty',
      imageUrl:
        'https://i.pinimg.com/originals/22/ea/b5/22eab5bd6bb72762ffa332ed76f08bff.jpg',
      comments: ['awesome places', 'wonderful experience']
    },
  ];

  constructor() { }

  getPlaces(){
    return [...this.places]
  }

  getPlace(placeId: string){
    return {
      ...this.places.find(place =>{
        return place.id === placeId
      })
    }
  }

  addPlace(title: string, imageUrl: string){
    this.places.push({
      title,
      imageUrl,
      comments: [],
      id: this.places.length + 1 + ''
    });
  }

  deletePlace(placeId: string){
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }


}
