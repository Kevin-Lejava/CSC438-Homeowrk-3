import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  styles: [`
  .sebm-google-map-container {
     height: 300px;
   }
`],
template: `
  <sebm-google-map>
  </sebm-google-map>`
})

export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  theFirstItem: Place[];

  lat = 21.3069;
  lng = -157.8583;
  mapType = 'satellite';

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
    this.theFirstItem = this.loadedPlaces.slice(1);
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
