import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PitchPage } from './pitch';
import { Gyroscope } from '@ionic-native/gyroscope/ngx';

@NgModule({
  declarations: [
    Gyroscope
  ],
  imports: [
    IonicPageModule.forChild(PitchPage),
  ],
  providers: [
    Gyroscope,
  ]
})
export class PitchPageModule { } 
