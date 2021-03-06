
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { PageNavigatorProvider } from '../../providers/page-navigator/page-navigator';
import { ModalController } from 'ionic-angular';
//import { ShopPage } from '../../pages/shop/shop';
import { ModalPage } from '../../pages/modal/modal';

declare var google;

@Injectable()
export class GoogleMapsProvider {
  mapElement: any;
  map: any;

  constructor(
    private geolocation: Geolocation,
    private navigator: PageNavigatorProvider,
    public modalCtrl: ModalController) {
    console.log('Hello GoogleMapsProvider Provider');
  }

  init(mapElement: any): Promise<any> {
    this.mapElement = mapElement;
    return this.loadGoogleMaps();
  }

  loadGoogleMaps(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.initMap());
    });
  }

  initMap(): Promise<any> {
    var self = this;
    return new Promise((resolve) => {
      self.geolocation.getCurrentPosition().then((position) => {

        // UNCOMMENT IT
        //let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        let latLng = new google.maps.LatLng(40.713744, -74.009056);

        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          zoomControl: true,
          scaleControl: true,
          disableDefaultUI: true
        }

        self.map = new google.maps.Map(this.mapElement, mapOptions);
        self._addMarker();
        resolve(true);

      });

    });

  }

  _addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      icon: 'assets/imgs/current.png',
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>You are here!</h4>";

    this.addInfoWindow(marker, content);
  }

  addMarker(location: any) {
    let marker = new google.maps.Marker({
      map: this.map,
      icon: 'assets/imgs/32.png',
      animation: google.maps.Animation.DROP,
      center: this.map.getCenter(),
      position: new google.maps.LatLng(location.latitude, location.longitude)
    });

    let content = "<h4>" + location.title + "!</h4>";
    this.handleMarkerClick(marker, location);
  }

  handleMarkerClick(marker, location) {
    google.maps.event.addListener(marker, 'click', () => {
      // this.navigator.navigate(ModalPage);
      let modal = this.modalCtrl.create(ModalPage);
      modal.present();
    });
  }

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }



}
