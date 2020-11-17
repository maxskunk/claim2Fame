import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PitchPage } from './pitch';

@NgModule({
  declarations: [
    PitchPage,
  ],
  imports: [
    IonicPageModule.forChild(PitchPage),
  ],
})
export class PitchPageModule { } 
