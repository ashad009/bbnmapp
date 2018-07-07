
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';
import { LocationsProvider } from '../../providers/locations/locations';
import { Diagnostic } from '@ionic-native/diagnostic';
import { LoadingProvider } from '../../providers/loading/loading';

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
    private diagnostic: Diagnostic,
    private loadingProvider: LoadingProvider
  ) {
  }

  ionViewDidLoad(){
    var self = this;
    //self.platform.ready().then(() => {
      //self.diagnostic.isLocationEnabled()
      //.then((isAvailable) => {
        //if (isAvailable)
          self.render();
        //else
          //alert('Please Turn On Your GPS!');
      //})
      //.catch((e) => alert(JSON.stringify(e)))
    //});
  }

  private render(){
    var self = this;
    self.loadingProvider.showLoading();
    let mapLoaded = self.maps.init(this.mapElement.nativeElement);
    let locationLoaded = self.locationProvider.load();

    Promise.all([mapLoaded,locationLoaded])
    .then((result) =>{
      self.loadingProvider.stopLoading();
        let locations = result[1];
        locations.forEach(location => {
          self.maps.addMarker(location);
        });
    }).catch((e) => {
      self.loadingProvider.stopLoading();
      alert(JSON.stringify(e));
    });
  }


}
