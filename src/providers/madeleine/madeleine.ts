import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../envrionment';

/*
  Generated class for the MadeleineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MadeleinesProvider {

  api_url = environment.site_url+environment.madeleines_url;

  constructor(public http: HttpClient) {
    console.log('Hello MadeleinesProvider Provider');
  }

  getMadeleines(){
    return this.http.get(this.api_url);
  }

}
