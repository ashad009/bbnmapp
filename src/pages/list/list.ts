import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationsProvider } from '../../providers/locations/locations';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(private locations: LocationsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
