import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PorcelainesDetailPage } from './porcelaines-detail';

@NgModule({
  declarations: [
    PorcelainesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PorcelainesDetailPage),
  ],
})
export class PorcelainesDetailPageModule {}
