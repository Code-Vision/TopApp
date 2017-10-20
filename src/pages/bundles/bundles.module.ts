import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BundlesPage } from './bundles';

@NgModule({
  declarations: [
    BundlesPage,
  ],
  imports: [
    IonicPageModule.forChild(BundlesPage),
  ],
})
export class BundlesPageModule {}
