import { Component, OnInit } from '@angular/core';

import { ILocation } from '../../interfaces/ilocation';

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
  location: ILocation;

  constructor(private geoLoc: GoogleGeolocationService) { }

  ngOnInit() {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        this.reverseGeoCodeLocation(this.lat, this.lng);
      },
      function(failure) {
        console.log('Geolocation Error');
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  placeMarker(position: any) {
    this.reverseGeoCodeLocation(position.coords.lat, position.coords.lng);
  }

  reverseGeoCodeLocation(lat: number, lng: number) {
    this.geoLoc.getLocationInformationByCoordinates(lat, lng).subscribe(data => {

      this.location = {latitude: data.results[0].geometry.location.lat,
                      longitude: data.results[0].geometry.location.lng};


      if (this.markers.length === 0 || this.markers === undefined) {
        this.markers = [{latitude: lat,
                        longitude: lng}];
      } else {
         this.markers.push(this.location);
      }

    });
  }

}
