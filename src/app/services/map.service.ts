import { Injectable } from '@angular/core';
import { Map, View } from 'ol';
import { OSM } from 'ol/source';
import { Tile } from 'ol/layer';
import * as olProj from 'ol/proj';

@Injectable()
export class MapService {
  public initializeMap(target: string, lng: number, lat: number) {
    return new Map({
      target,
      layers: [
        new Tile({
          source: new OSM()
        }),
      ],
      view: new View({
        center: olProj.fromLonLat([lng, lat]),
        zoom: 10
      })
    });
  }
}
