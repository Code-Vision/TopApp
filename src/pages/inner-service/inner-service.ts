import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InnerServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inner-service',
  templateUrl: 'inner-service.html',
})
export class InnerServicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  items = [
    'GHC 2.00',
    'GHC 5.00',
    'GHC 10.00',
    'GHC 20.00'
  ];



  ionViewDidLoad() {
    console.log('ionViewDidLoad InnerServicePage');
  }

}
