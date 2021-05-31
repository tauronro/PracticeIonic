import { place } from './place.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: place;

  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router,
    private alertControl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('placeId');
      this.place = this.placesService.getPlace(recipeId);
      console.log(this  .place);
    });
  }
  async deletePlace() {
    const alertElement = await this.alertControl.create({
      header: 'are you sure, you want to delete it?',
      message: 'Be careful',
      buttons:[
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text: 'Delete',
          handler: ()=>{
            this.placesService.deletePlace(this.place.id);
            this.router.navigate(['/places'])
          }
        }
      ]
    });
    alertElement.present();
    
    
    
  
    
  }
}
