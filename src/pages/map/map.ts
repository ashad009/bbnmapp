
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { LocationsProvider } from '../../providers/locations/locations';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(
    private platform: Platform,
    private geolocation: Geolocation,
    private maps: GoogleMapsProvider,
    private locationProvider: LocationsProvider,
  ) {
  }

  ionViewDidLoad(){
    var self = this;
    self.platform.ready().then(() => {
      let mapLoaded = self.maps.init(this.mapElement.nativeElement);
      let locationLoaded = self.locationProvider.load();

      Promise.all([mapLoaded,locationLoaded])
      .then((result) =>{

          let locations = result[1];
          locations.forEach(location => {
            self.maps.addMarker(location);
          });
      });
    });
  }


}
