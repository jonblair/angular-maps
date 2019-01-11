import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AgmMapComponent } from './components/agm-map/agm-map.component';


@NgModule({
  declarations: [
    AppComponent,
    AgmMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD7p8ryR4JlJNToS9d0GoKL9YlLpVlj8Yw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
