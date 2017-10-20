import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { ServicesPage } from '../pages/services/services';
// import { NewServicesPage } from '../pages/new-services/new-services';
import { InnerServicePage } from '../pages/inner-service/inner-service';
import { DatabasePage } from '../pages/database/database';
import { MobileMoneyPage } from '../pages/mobile-money/mobile-money';
import { BorrowCreditPage } from '../pages/borrow-credit/borrow-credit';
import { BundlesPage } from '../pages/bundles/bundles';
import { DailyBundlesPage } from '../pages/daily-bundles/daily-bundles';
import { WeeklyBundlesPage } from '../pages/weekly-bundles/weekly-bundles';
import { MonthlyBundlesPage } from '../pages/monthly-bundles/monthly-bundles';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    ServicesPage,
    // NewServicesPage,
    InnerServicePage,
    DatabasePage,
    MobileMoneyPage,
    BorrowCreditPage,
    BundlesPage,
    DailyBundlesPage,
    WeeklyBundlesPage,
    MonthlyBundlesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    ServicesPage,
    // NewServicesPage,
    InnerServicePage,
    DatabasePage,
    MobileMoneyPage,
    BorrowCreditPage,
    BundlesPage,
    DailyBundlesPage,
    WeeklyBundlesPage,
    MonthlyBundlesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
