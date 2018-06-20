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
  selector: 'page-madeleines-detail',
  templateUrl: 'madeleines-detail.html',
})
export class MadeleinesDetailPage {

  madeleine;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.madeleine = this.navParams.get('madeleine');
    console.log(this.madeleine);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MadeleinesDetailPage');
  }

}
