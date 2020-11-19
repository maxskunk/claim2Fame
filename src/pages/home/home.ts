import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { CameraPreviewOptions, CameraPreview } from '@capacitor-community/camera-preview';
import { Plugins, CameraResultType, CameraDirection, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {




  constructor(public navCtrl: NavController, private plt: Platform) {

  }
  public imgSrc1: string;
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      direction: CameraDirection.Front,
      source: CameraSource.Prompt
    });
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
    this.imgSrc1 = image.webPath;
    // Can be set to the src of an image now
    //this.imageElement.src = imageUrl;
    //this.imgSrc1 = this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,' + imageUrl);
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
  public takePhoto() {
    console.log("Attempting to take photo");
    this.takePicture();
  }



}
