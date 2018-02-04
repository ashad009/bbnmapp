import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationsProvider } from '../../providers/locations/locations';
import { PageNavigatorProvider } from '../../providers/page-navigator/page-navigator';
import { ShopPage } from '../shop/shop';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(private locations: LocationsProvider,
  private navigator : PageNavigatorProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  navigateShop(location:any){
    this.navigator.navigate(ShopPage);
  }

}
