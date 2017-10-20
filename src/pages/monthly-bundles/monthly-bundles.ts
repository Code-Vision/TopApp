import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the MonthlyBundlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-monthly-bundles',
  templateUrl: 'monthly-bundles.html',
})
export class MonthlyBundlesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonthlyBundlesPage');
  }

  items = [
    'GHC 10 - 400MB - 30 days',
    'GHC 20 - 1GB - 30 days',
    'GHC 40 - 2.5GB - 30 days ',
    'GHC 60 - 4GB - 45 days',
    'GHC 80 - 6GB - 45 days',
    'GHC 120 - 10GB - 45 days',
    'GHC 150 - 15GB - 30 days',
    'GHC 199 - 20GB - 30 days',
    'GHC 289 - 50GB - 30 days',
    'GHC 300 - 100GB - 30 days',
    'GHC 349 - 150GB - 30 days',
    'GHC 399 - 200GB - 30 days'
    ]

    showConfirm() {
      let confirm = this.alertCtrl.create({
        title: 'Confirm Purchase?',
        message: 'Please confirm purchase of GHC Internet Pack for 20MB valid for a month?',
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

    itemSelected(item: string){
      if (item == 'GHC 10 - 400MB - 30 days'||item == 'GHC 20 - 1GB - 30 days'||'GHC 40 - 2.5GB - 30 days '|| 'GHC 60 - 4GB - 45 days'||
    item == 'GHC 80 - 6GB - 45 days' || item == 'GHC 120 - 10GB - 45 days' || item == 'GHC 150 - 15GB - 30 days' || item == 'GHC 199 - 20GB - 30 days'||
  item == 'GHC 289 - 50GB - 30 days' || item == 'GHC 300 - 100GB - 30 days' || item == 'GHC 349 - 150GB - 30 days' || item == 'GHC 399 - 200GB - 30 days'){
    this.showConfirm();
  }
    }

}
