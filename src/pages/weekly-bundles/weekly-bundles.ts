import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the WeeklyBundlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weekly-bundles',
  templateUrl: 'weekly-bundles.html',
})
export class WeeklyBundlesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeeklyBundlesPage');
  }

  items = [
    'GHC 1.0 - 25MB',
    'GHC 2.0 - 60MB',
    'GHC 3.0 - 180MB',
    'GHC 5.0 - 300MB',
    'GHC 10.0 - 1000MB'
    ]

    showConfirm() {
      let confirm = this.alertCtrl.create({
        title: 'Confirm Purchase?',
        message: 'Please confirm purchase of GHC Internet Pack for 20MB valid for a week?',
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
      if (item == 'GHC 1.0 - 25MB' || item == 'GHC 2.0 - 60MB' || item == 'GHC 3.0 - 180MB' || item == 'GHC 5.0 - 300MB' || item == 'GHC 10.0 - 1000MB'){
        this.showConfirm();
      }
    }


}
