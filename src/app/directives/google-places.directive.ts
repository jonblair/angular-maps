import { Directive, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import { ILocation } from '../interfaces/ilocation';

declare var google: any;

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[google-place]'
})
export class GooglePlacesDirective implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  private element: HTMLInputElement;

  constructor(elRef: ElementRef) {
    // elRef will get a reference to the element where
    // the directive is placed
    this.element = elRef.nativeElement;
  }

  getFormattedAddress(place) {
    const location_obj = {};

    // tslint:disable-next-line:forin
    for (const i in place.address_components) {
      const item = place.address_components[i];

      location_obj['formatted_address'] = place.formatted_address;

      if (item['types'].indexOf('locality') > -1) {
        location_obj['locality'] = item['long_name'];
      } else if (item['types'].indexOf('administrative_area_level_1') > -1) {
        location_obj['admin_area_l1'] = item['short_name'];
      } else if (item['types'].indexOf('street_number') > -1) {
        location_obj['street_number'] = item['short_name'];
      } else if (item['types'].indexOf('route') > -1) {
        location_obj['route'] = item['long_name'];
      } else if (item['types'].indexOf('country') > -1) {
        location_obj['country'] = item['long_name'];
      } else if (item['types'].indexOf('postal_code') > -1) {
        location_obj['postal_code'] = item['short_name'];
      }
    }

    return location_obj;
  }

  ngOnInit() {
    const autocomplete = new google.maps.places.Autocomplete(this.element);
      // Event listener to monitor place changes in the input
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
      // Emit the new address object for the updated place
      this.onSelect.emit(
        this.getFormattedAddress(autocomplete.getPlace()));
    });
  }

}
