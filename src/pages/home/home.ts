import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider} from '../../providers/api/api'
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  private shops:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private apiProvider: ApiProvider,
    ) {
    apiProvider.getShopsNearMe().subscribe(data => this.shops = data.shops);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
