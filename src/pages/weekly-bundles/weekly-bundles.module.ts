import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeeklyBundlesPage } from './weekly-bundles';

@NgModule({
  declarations: [
    WeeklyBundlesPage,
  ],
  imports: [
    IonicPageModule.forChild(WeeklyBundlesPage),
  ],
})
export class WeeklyBundlesPageModule {}
