import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { IonicModule } from '@ionic/angular';

import { DiscoverPageRoutingModule } from './discover-routing.module';

import { DiscoverPage } from './discover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverPageRoutingModule,
    AgmCoreModule.forRoot({apiKey: 'YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE'})
  ],
  declarations: [DiscoverPage],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DiscoverPageModule {}
