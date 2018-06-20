import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { ActuPage } from '../pages/actu/actu';
import { MadeleinePage } from '../pages/madeleine/madeleine';
import { DecouvrirPage } from '../pages/decouvrir/decouvrir';
import { PorcelainePage } from '../pages/porcelaine/porcelaine';
import { MapsProvider } from '../providers/maps/maps';
import { JsMapsProvider } from '../providers/js-maps/js-maps';
import { NativeMapsProvider } from '../providers/native-maps/native-maps';
import { GoogleMaps } from '@ionic-native/google-maps';
import { MadeleinesProvider } from '../providers/madeleine/madeleine';
import { QuotesProvider } from '../providers/quotes/quotes';
import { HttpClientModule } from '@angular/common/http';
import { PorcelainesProvider } from '../providers/porcelaine/porcelaine';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AboutPage,
    MadeleinePage,
    DecouvrirPage,
    PorcelainePage,
    ActuPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    DecouvrirPage,
    TabsPage,
    MadeleinePage,
    PorcelainePage,
    ActuPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MapsProvider,
    JsMapsProvider,
    NativeMapsProvider,
    GoogleMaps,
    MadeleinesProvider,
    QuotesProvider,
    PorcelainesProvider

  ]
})
export class AppModule {}
