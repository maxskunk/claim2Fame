import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PitchPage } from '../pages/pitch/pitch';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PhotoPage } from '../pages/photo/photo';
import { CameraPreviewWeb } from '@capacitor-community/camera-preview/';
import { defineCustomElements } from '@ionic/pwa-elements/loader';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //ListPage,
    PitchPage,
    PhotoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // ListPage,
    PitchPage,
    PhotoPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    CameraPreviewWeb,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
