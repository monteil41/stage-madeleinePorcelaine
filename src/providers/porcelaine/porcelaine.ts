import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../envrionment';

/*
  Generated class for the MadeleineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PorcelainesProvider {

  api_url = environment.site_url+environment.porcelaines_url;

  constructor(public http: HttpClient) {
    console.log('Hello PorcelainesProvider Provider');
  }

  getPorcelaines(){
    return this.http.get(this.api_url);
  }

}
