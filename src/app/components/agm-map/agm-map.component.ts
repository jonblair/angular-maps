import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agm-map',
  templateUrl: './agm-map.component.html',
  styleUrls: ['./agm-map.component.css']
})
export class AgmMapComponent implements OnInit {
  lat: number = 36.119300;
  lng: number = -85.997910;

  constructor() { }

  ngOnInit() {
  }

}
