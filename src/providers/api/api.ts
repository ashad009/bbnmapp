import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {
  constructor(
    private http: Http,
  ) { }

  //in Real pass param: location and request will be post
  getShopsNearMe = () => this.http.get('assets/data/shops.json').map(res => res.json());
}
