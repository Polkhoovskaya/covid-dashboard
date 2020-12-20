import { Component, OnInit } from '@angular/core';
import { TotalCases } from '../../models/totalCases.model';
import { TotalCasesService } from '../../services/TotalCasesService';
import { environment } from '../../../environments/environment';
import * as Mapboxgl from 'mapbox-gl';

interface IGeometry {
  type: string;
  coordinates: number[];
}

interface PropertiesGeoJSON {
  country: string;
  totalConfirmed: number;
  totalDeaths: number;
  totalRecovered: number;
}

interface IGeoJson {
  type: string;
  geometry: IGeometry;
  properties: PropertiesGeoJSON;
}

interface ICollectionsGeoJSON {
  type: string;
  features: Array<IGeoJson>
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [TotalCasesService]
})
export class MapComponent implements OnInit {
  totalCases: TotalCases[];
  geoJson: ICollectionsGeoJSON;

  constructor(private totalCasesService: TotalCasesService) { }

  ngOnInit(): void {
    this.totalCasesService.getTotalCases().then((data: TotalCases[]) => {
      this.geoJson = this.createGeoJson(data);
      console.log(this.geoJson);

    })
  }

  createGeoJson(data) {
    let geoJson: ICollectionsGeoJSON = { 'type': 'FeatureCollection', 'features': [] };
    for (var key in data) {
      const newFeature = {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [parseFloat(data[key].longitude), parseFloat(data[key].latitude)]
        },
        "properties": {
          "country": data[key].country,
          "totalConfirmed": data[key].totalConfirmed,
          "totalDeaths": data[key].totalDeaths,
          "totalRecovered": data[key].totalRecovered,
        }
      }
      geoJson['features'].push(newFeature);
    }
    return geoJson;
  }
}
