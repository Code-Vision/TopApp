import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyBundlesPage } from './daily-bundles';

@NgModule({
  declarations: [
    DailyBundlesPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyBundlesPage),
  ],
})
export class DailyBundlesPageModule {}
