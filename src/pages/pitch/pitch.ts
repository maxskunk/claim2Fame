import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';

/**
 * Generated class for the PitchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pitch',
  templateUrl: 'pitch.html',
})
export class PitchPage {

  //private gyroscope: Gyroscope
  constructor(public navCtrl: NavController, public navParams: NavParams, private gyroscope: Gyroscope, public plt: Platform) {
  }

  public value: string = "NEW";

  ionViewDidLoad() {
    console.log('ionViewDidLoad PitchPage');

    this.plt.ready().then(() => {
      console.log('ready');
      let options: GyroscopeOptions = {
        frequency: 1000
      }
      this.gyroscope.getCurrent(options).then((orientation: GyroscopeOrientation) => {
        this.value = String(orientation.x);
        console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
      })
        .catch()

      this.gyroscope.watch()
        .subscribe((orientation: GyroscopeOrientation) => {
          this.value = String(orientation.x);
          console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
        });
    });


    //   this.gyroscope.getCurrent(options)
    //     .then((orientation: GyroscopeOrientation) => {
    //       console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
    //     })
    //     .catch()


    //   this.gyroscope.watch()
    //     .subscribe((orientation: GyroscopeOrientation) => {
    //       console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
    //     });
    // }
  }

  // this.platform.ready().then((readyState) => {
  //   let options: GyroscopeOptions = {
  //     frequency: 1000
  //   };

  //   this.gyroscope.getCurrent()
  //     .then((orientation: GyroscopeOrientation) => {
  //       console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
  //     });

  //   this.devMotion.getCurrentAcceleration().then(
  //     (acceleration: DeviceMotionAccelerationData) => console.log(acceleration),
  //     (error: any) => console.log(error)
  //   );
  // });
}
