import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BorrowCreditPage } from './borrow-credit';

@NgModule({
  declarations: [
    BorrowCreditPage,
  ],
  imports: [
    IonicPageModule.forChild(BorrowCreditPage),
  ],
})
export class BorrowCreditPageModule {}
