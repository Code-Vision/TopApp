import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonthlyBundlesPage } from './monthly-bundles';

@NgModule({
  declarations: [
    MonthlyBundlesPage,
  ],
  imports: [
    IonicPageModule.forChild(MonthlyBundlesPage),
  ],
})
export class MonthlyBundlesPageModule {}
