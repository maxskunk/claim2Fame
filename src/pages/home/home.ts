import { Component } from '@angular/core';
import { Gyroscope, GyroscopeOptions, GyroscopeOrientation } from '@ionic-native/gyroscope/ngx';
import { NavController, Platform } from 'ionic-angular';
import { MotionOrientationEventResult, PluginListenerHandle, Capacitor, Motion } from '@capacitor/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private orientation: MotionOrientationEventResult;
  private watchListener: PluginListenerHandle;

  public orientationDisplay: string;

  constructor(public navCtrl: NavController, private gyroscope: Gyroscope, private plt: Platform) {

    this.watchListener = Motion.addListener(
      'orientation', (values) => {
        console.log('watchListener', values);
        this.orientation = values;
        this.orientationDisplay = String(this.orientation.alpha);
      });
  }

  ionViewDidLoad() {
    Motion.requestPermissions();

    console.log('HOME PitchPage');
    // DeviceMotionEvent.requestPermission();
    Capacitor.Plugins
    this.plt.ready().then(() => {
      console.log('ready');
      // let options: GyroscopeOptions = {
      //   frequency: 1000
      // }

      // this.gyroscope.getCurrent(options).then((orientation: GyroscopeOrientation) => {
      //   //this.value = String(orientation.x);
      //   console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
      // })
      //   .catch()
    });
  }


}
