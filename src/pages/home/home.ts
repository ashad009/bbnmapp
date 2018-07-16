import { Diagnostic } from '@ionic-native/diagnostic';
import { Component } from '@angular/core';
import { IonicPage,Platform } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Geolocation } from '@ionic-native/geolocation';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  private shops: any;
  constructor(
    private apiProvider: ApiProvider,
    private platform: Platform,
    private diagnostic: Diagnostic,
    private geolocation: Geolocation
  ) {
  }

  ionViewDidLoad() {
    var self = this;
    self.platform.ready().then(() => {
      self.diagnostic.isLocationEnabled()
        .then((isAvailable) => {
          if (isAvailable){
            self.geolocation.getCurrentPosition().then((resp) => {
              console.log(resp.coords.latitude);
              console.log(resp.coords.longitude);
              self.apiProvider.getShopsNearMe().subscribe(data => this.shops = data.shops);
             }).catch((error) => {
               console.log('Error getting location', error);
             });
          }
          else
            alert('Please Turn On Your GPS!');
        })
        .catch((e) => alert(JSON.stringify(e)))
    });
  }

  showDetailsFor(shop) {
    alert(JSON.stringify(shop));
  }

}
