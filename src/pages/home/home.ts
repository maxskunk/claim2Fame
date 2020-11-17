import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { CameraPreviewOptions, CameraPreview } from '@capacitor-community/camera-preview';
import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {




  constructor(public navCtrl: NavController, private plt: Platform) {

  }



  ionViewDidLoad() {


    console.log('HOME ');


    // DeviceMotionEvent.requestPermission();
    const cameraPreviewOptions: CameraPreviewOptions = {
      position: 'rear',
      height: 1920,
      width: 1080
    };
    //CameraPreview.start(cameraPreviewOptions);
    //this.takePicture();

  }



}
