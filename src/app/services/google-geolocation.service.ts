import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILocation } from '../interfaces/ilocation';

@Injectable({
  providedIn: 'root'
})
export class GoogleGeolocationService {

  constructor(private http: HttpClient) { }

  getLocationInformationByCoordinates(lat: number, lng: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=AIzaSyD7p8ryR4JlJNToS9d0GoKL9YlLpVlj8Yw');
  }
}
