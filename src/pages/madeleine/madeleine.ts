import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MadeleinesProvider} from '../../providers/madeleine/madeleine';

/**
 * Generated class for the MadeleinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-madeleine',
  templateUrl: 'madeleine.html',
})
export class MadeleinePage {

  madeleines;

    constructor(public navCtrl: NavController, public navParams: NavParams, private madeleinesProvider: MadeleinesProvider) {
      this.madeleinesProvider.getMadeleines().subscribe(data => {
        console.log(data);
        this.madeleines = data;
      });
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad ActuPage');
    }

    onShowMadeleineDetail(madeleine){
      this.navCtrl.push('MadeleinesDetailPage', {madeleine: madeleine});
    }



}
