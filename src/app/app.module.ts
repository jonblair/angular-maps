import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AgmMapComponent } from './components/agm-map/agm-map.component';
import { GoogleGeolocationService } from './services/google-geolocation.service';
import { HttpClientModule } from '@angular/common/http';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { GooglePlacesDirective } from './directives/google-places.directive';

@NgModule({
  declarations: [
    AppComponent,
    AgmMapComponent,
    GooglePlacesDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD7p8ryR4JlJNToS9d0GoKL9YlLpVlj8Yw',
      libraries: ['places'],
    }),
    AgmSnazzyInfoWindowModule,
  ],
  providers: [GoogleGeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
