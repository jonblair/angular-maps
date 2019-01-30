import { Component, OnInit } from '@angular/core';
import { getLocaleTimeFormat } from '@angular/common';

// import { GoogleGeolocationService } from '../../services/google-geolocation.service';

declare var google: any;
const geocoder = new google.maps.Geocoder();

@Component({
  selector: 'app-agm-map',
  templateUrl: './agm-map.component.html',
  styleUrls: ['./agm-map.component.css']
})
export class AgmMapComponent implements OnInit {
  public lat: number;
  public lng: number;
  public markers = [];
  public addrKeys: string[];
  public addr: object;

  // private geoLoc: GoogleGeolocationService
  constructor() { }

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

  setAddress(addrObj) {
    this.addr = addrObj;
    this.getLatLong(addrObj);
    // console.log(this.markers);

    this.addrKeys = Object.keys(addrObj);
  }

  getLatLong(_addrObj) {
    geocoder.geocode({ 'address': _addrObj['formatted_address'] }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            // this.markers = [{latitude: results[0].geometry.location.lat(), longitude: results[0].geometry.location.lng()}];
            // tslint:disable-next-line:max-line-length
            this.markers.push({latitude: results[0].geometry.location.lat(), longitude: results[0].geometry.location.lng()});
            console.log(this.markers);
        }
    });
  }
}
