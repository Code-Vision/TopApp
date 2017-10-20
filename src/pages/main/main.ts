import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesPage } from '../services/services';
import { DatabasePage } from '../database/database';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toDatabasePage(){
    this.navCtrl.push(DatabasePage);
  }

  toServicesPage(){
    this.navCtrl.push(ServicesPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
