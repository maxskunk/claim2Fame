import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoPage } from './photo';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

@NgModule({
  declarations: [
    PhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoPage),
  ],
})
export class PhotoPageModule { }
defineCustomElements(window);
