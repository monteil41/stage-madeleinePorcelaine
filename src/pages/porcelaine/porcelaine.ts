import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PorcelainesProvider} from '../../providers/porcelaine/porcelaine';

/**
 * Generated class for the MadeleinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-porcelaine',
  templateUrl: 'porcelaine.html',
})
export class PorcelainePage {

  porcelaines;

    constructor(public navCtrl: NavController, public navParams: NavParams, private porcelainesProvider: PorcelainesProvider) {
      this.porcelainesProvider.getPorcelaines().subscribe(data => {
        console.log(data);
        this.porcelaines = data;
      });
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad ActuPage');
    }

    onShowPorcelaineDetail(porcelaine){
      this.navCtrl.push('PorcelainesDetailPage', {porcelaine: porcelaine});
    }



}
