import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import { Camera, CameraDirection, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {

  public imgSrc1: string;

  @ViewChild('imageElement') imageElement: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoPage');


  }


  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
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

  public takePhoto() {
    console.log("Attempting to take photo");
    this.takePicture();
  }



}
