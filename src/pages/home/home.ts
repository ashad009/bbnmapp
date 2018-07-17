import { LoadingProvider } from './../../providers/loading/loading';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
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
    private geolocation: Geolocation,
    private loadingProvider: LoadingProvider
  ) {
  }

  ionViewDidLoad() {
    var self = this;
    self.loadingProvider.showLoading();
    self.platform.ready().then(() => {
      self.diagnostic.isLocationEnabled()
        .then((isAvailable) => {
          if (isAvailable) {
            self.geolocation.getCurrentPosition().then((resp) => {
              console.log(resp.coords.latitude);
              console.log(resp.coords.longitude);
              self.loadingProvider.stopLoading();
              self.apiProvider.getShopsNearMe()
                .subscribe(data => this.shops = data.shops);
            }).catch((error) => {
              self.loadingProvider.stopLoading();
              console.log('Error getting location', error);
            });
          }
          else {
            self.loadingProvider.stopLoading();
            alert('Please Turn On Your GPS!');
          }

        })
        .catch((e) => {
          self.loadingProvider.stopLoading();
          alert(JSON.stringify(e));
        })
    });
  }

  showDetailsFor(shop) {
    alert(JSON.stringify(shop));
  }

}
