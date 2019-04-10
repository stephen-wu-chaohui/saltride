import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() latitude = 0.0;
  @Input() longitude = 0.0;
  @Input() zoom = 12;
  @Input() mapType: 'HYBRID'|'ROADMAP'|'SATELLITE'|'TERRAIN' = 'ROADMAP';

  @ViewChild('map') mapElement;
  map: any;

  get mapTypeId() {
    return this.mapType === 'HYBRID' ? google.maps.MapTypeId.HYBRID :
            'ROADMAP' ? google.maps.MapTypeId.ROADMAP :
            'SATELLITE' ? google.maps.MapTypeId.SATELLITE :
            google.maps.MapTypeId.TERRAIN;
  }

  constructor() { }

  ngOnInit() {
    const coords = new google.maps.LatLng(this.latitude, this.longitude);
    const mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: this.zoom,
      mapTypeId: this.mapTypeId,
      fullscreenControl: false,
      mapTypeControl: false,
      zoomControl: false,
      overviewMapControl: false,
      panControl: false,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

}
