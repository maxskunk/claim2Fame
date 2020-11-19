import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { MotionOrientationEventResult, PluginListenerHandle, Capacitor, Motion } from '@capacitor/core';

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
  public orientationDisplay: string = "loading";
  private orientation: MotionOrientationEventResult;
  private watchListener: PluginListenerHandle;
  constructor(public navCtrl: NavController, public navParams: NavParams, public plt: Platform, private ngZone: NgZone) {

  }


  ionViewDidLoad() {
    Motion.requestPermissions();
    //Capacitor.Plugins;
    console.log('ionViewDidLoad PitchPage');

    this.plt.ready().then(() => {
      console.log('ready');


    });
  }

  async ngOnInit() {
    this.watchListener = Motion.addListener(
      'orientation', (values) => {
        this.ngZone.run(() => {
          console.log('watchListener', values);
          this.orientation = values;
          this.orientationDisplay = String(Math.round(this.orientation.alpha));

        });

      });
  }


}
