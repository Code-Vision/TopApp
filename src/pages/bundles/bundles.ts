import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DailyBundlesPage } from '../daily-bundles/daily-bundles';
import { WeeklyBundlesPage } from '../weekly-bundles/weekly-bundles';
import { MonthlyBundlesPage } from '../monthly-bundles/monthly-bundles';
/**
 * Generated class for the BundlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bundles',
  templateUrl: 'bundles.html',
})
export class BundlesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  items = [
    'Daily',
    'Weekly',
    'Monthly',
    'Lifestyle',
    'Video Pack',
    // 'Me2U',
    'Check Balance',
    // 'Notification'
  ]

  itemSelected(item: string){
    // console.log("Selected Item", item)
    if (item == 'Daily'){
      // console.log("Daily is working")
      this.navCtrl.push(DailyBundlesPage);
    }
    else if (item == 'Weekly'){
      this.navCtrl.push(WeeklyBundlesPage);
    }
    else if (item == 'Monthly'){
      this.navCtrl.push(MonthlyBundlesPage);
    }

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BundlesPage');
  }




}
