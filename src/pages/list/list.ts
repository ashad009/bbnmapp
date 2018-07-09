import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { LocationsProvider } from '../../providers/locations/locations';
import { ModalPage } from '../modal/modal';
import { Title } from '@angular/platform-browser';



@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  constructor(
    private locations: LocationsProvider,
    public navCtrl: NavController,
    public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }
  public openModal(location: any) {
    console.log('Title:', location.title);
    let modal = this.modalCtrl.create(ModalPage, { title: location.title, price: location.price, opening: location.opening });
    modal.present();
  }
  /*navigateShop(location:any){
    this.navigator.navigate(ShopPage);
  }*/

}
