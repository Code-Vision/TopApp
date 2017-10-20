import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the DailyBundlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daily-bundles',
  templateUrl: 'daily-bundles.html',
})
export class DailyBundlesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyBundlesPage');
  }

  items = [
    'GHC 0.5 - 20MB',
    'GHC 1.0 - 50MB',
    'GHC 2.0 - 120MB',
    'GHC 3.0 - 500MB'
    ]



  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Confirm Purchase?',
      message: 'Please confirm purchase of GHC 0.5 Internet Pack for 20MB valid for 24 hrs?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  itemSelected(item: string) {
    // console.log("Selected Item", item);
    if (item == 'GHC 0.5 - 20MB' || item == 'GHC 3.0 - 500MB' || item == 'GHC 1.0 - 50MB' || item == 'GHC 2.0 - 120MB'){
      this.showConfirm();
    }
    // for (item in this.items){
    //   this.showConfirm();
    // }
}


}
