import { Component, OnInit } from '@angular/core';

import { GoogleGeolocationService } from '../../services/google-geolocation.service';

@Component({
  selector: 'app-agm-map',
  templateUrl: './agm-map.component.html',
  styleUrls: ['./agm-map.component.css']
})
export class AgmMapComponent implements OnInit {
  lat: number;
  lng: number;
  markers = [];

  constructor(private geoLoc: GoogleGeolocationService) { }

  ngOnInit() {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        this.markers = [{latitude: this.lat, longitude: this.lng}];
      },
      function(failure) {
        console.log('Geolocation Error');
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  placeMarker(position: any) {
    this.markers.push({latitude: position.coords.lat, longitude: position.coords.lng});
  }

}
