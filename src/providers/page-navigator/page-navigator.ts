import { App} from 'ionic-angular';
import { Injectable } from '@angular/core';


@Injectable()
export class PageNavigatorProvider {

  constructor(private appCtrl: App) {
  }

  navigate(Page){
    var root  =this.appCtrl.getRootNav();
    root.popToRoot();
    root.setRoot(Page);
  }
}
