import { Component, OnInit, ViewChild } from '@angular/core';
import { MapService } from '../../services/map.service';
import { Map } from 'ol';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('map') map: Map;
  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.map = this.mapService.initializeMap('map', 21.0122287, 52.229675);
  }
}
