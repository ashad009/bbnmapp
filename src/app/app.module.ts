import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Diagnostic } from '@ionic-native/diagnostic';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { ListPage } from '../pages/list/list';
import { ShopPage } from '../pages/shop/shop';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationsProvider } from '../providers/locations/locations';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { HttpModule } from '@angular/http';
import { LoadingProvider } from '../providers/loading/loading';
import { PageNavigatorProvider } from '../providers/page-navigator/page-navigator';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    ListPage,
    ShopPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    ListPage,
    ShopPage
  ],
  providers: [
    StatusBar,
    Diagnostic,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationsProvider,
    GoogleMapsProvider,
    LoadingProvider,
    PageNavigatorProvider
  ]
})
export class AppModule {}
