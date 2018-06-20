import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MadeleinesDetailPage } from './madeleines-detail';

@NgModule({
  declarations: [
    MadeleinesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MadeleinesDetailPage),
  ],
})
export class MadeleinesDetailPageModule {}
