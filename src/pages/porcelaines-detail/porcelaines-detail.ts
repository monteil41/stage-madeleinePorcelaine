import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MadeleinesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-porcelaines-detail',
  templateUrl: 'porcelaines-detail.html',
})
export class PorcelainesDetailPage {

  porcelaine;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.porcelaine = this.navParams.get('porcelaine');
    console.log(this.porcelaine);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PorcelainesDetailPage');
  }

}
