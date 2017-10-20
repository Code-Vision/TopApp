import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InnerServicePage } from '../inner-service/inner-service';
import { MobileMoneyPage } from '../mobile-money/mobile-money';
import { BorrowCreditPage } from '../borrow-credit/borrow-credit';
import { BundlesPage } from '../bundles/bundles';
/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
  //declare var Masonry: any; //outer scope
@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {
  images: any = [];
  title: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  innerServicesList(){
    this.navCtrl.push(InnerServicePage);
  }

  mobileMoneyPage(){
    this.navCtrl.push(MobileMoneyPage);
  }

  toBorrowCredit(){
    this.navCtrl.push(BorrowCreditPage);
  }

  toBundlePage(){
    this.navCtrl.push(BundlesPage)
  }
}
