import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton} from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton]
})
export class HomePage {
  coordinates: any="";
  lat:number = 0;
  long:number = 0;
  time:number = 0;
  real_time:any = "";

  constructor() {}

   async getGPS() {
    this.coordinates = await Geolocation.getCurrentPosition();
    this.lat = this.coordinates.coords.latitude;
    this.long = this.coordinates.coords.longitude;
    this.time = this.coordinates.timestamp;
    this.real_time = new Date(this.time);
  }

  async openBrowser() {
    await Browser.open({ url: 'http://www.youtube.com/' });
  }
}
