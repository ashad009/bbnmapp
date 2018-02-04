import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PageNavigatorProvider } from '../../providers/page-navigator/page-navigator';
import { HomePage } from '../home/home';

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private navigator: PageNavigatorProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

  goBack(){
    this.navigator.navigate(HomePage);
  }

}
