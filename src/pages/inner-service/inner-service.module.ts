import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InnerServicePage } from './inner-service';

@NgModule({
  declarations: [
    InnerServicePage,
  ],
  imports: [
    IonicPageModule.forChild(InnerServicePage),
  ],
})
export class InnerServicePageModule {}
