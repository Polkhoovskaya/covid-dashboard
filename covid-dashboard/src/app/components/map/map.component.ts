import { TotalCases } from '../../models/totalCases.model';
import { TotalCasesService } from '../../services/TotalCasesService';
import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
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
  encapsulation: ViewEncapsulation.None,
  providers: [TotalCasesService]
})
export class MapComponent implements OnInit {
  totalCases: TotalCases[];
  geoJson: ICollectionsGeoJSON;
  map: Mapboxgl.Map;
  popup: Mapboxgl.Popup
  geoapifyKey: string = environment.geoapifyKey;
  mapTile = `https://maps.geoapify.com/v1/styles/dark-matter-yellow-roads/style.json?apiKey=${this.geoapifyKey}`;

  constructor(private totalCasesService: TotalCasesService) { }

  ngOnInit(): void {
    this.totalCasesService.getTotalCases().then((data: TotalCases[]) => {
      this.geoJson = this.createGeoJson(data);
    });

    (Mapboxgl as any).accessToken = environment.mapboxKey;
    setTimeout(() => {
      this.map = new Mapboxgl.Map({
        container: 'map',
        style: this.mapTile,
        center: [10, 30],
        zoom: 0.8
      });
      this.loadMap('totalConfirmed');
      this.addDisplayZoomControls();
    }, 100);
    this.toggleButtons();
  }

  createGeoJson(data): ICollectionsGeoJSON {
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

  loadMap(criterion) {
    this.map.on('load', () => {
      this.map.addSource("places", {
        "type": "geojson",
        "data": this.geoJson
      });
      this.addMarkers(criterion);
    });
  }

  addMarkers(criterion) {
    const mapboxMarker = Array.from(document.getElementsByClassName('mapboxgl-marker'));
    mapboxMarker.forEach((marker) => {
      marker.remove();
    });
    enum Colors {
      totalConfirmed = '23ff2c2c',
      totalDeaths = '232c5eff',
      totalRecovered = '2300a027'
    }
    this.geoJson['features'].forEach((marker) => {
      const el = this.setMarkerStyle(marker.properties[criterion], Colors[criterion]);
      new Mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(this.map);
      el.addEventListener('click', (e) => {
        this.flyToCountry(marker);
      })
      el.addEventListener('mouseenter', (e) => {
        this.createPopUp(marker, criterion);
      })
      el.addEventListener('mouseleave', (e) => {
        this.popup.remove();
      })
    })
  }

  setMarkerStyle(amount: number, color: number) {
    const markerTile = `https://api.geoapify.com/v1/icon/?type=circle&color=%${color}&iconType=awesome&apiKey=${this.geoapifyKey}`;
    let iconSize: number = 0;
    if (amount > 5000000) iconSize = 21;
    if (amount > 1000000 && amount < 5000000) iconSize = 18;
    if (amount > 500000 && amount < 1000000) iconSize = 15;
    if (amount > 250000 && amount < 500000) iconSize = 12;
    if (amount > 100000 && amount < 250000) iconSize = 10;
    if (amount > 50000 && amount < 100000) iconSize = 8;
    if (amount > 20000 && amount < 50000) iconSize = 6;
    if (amount < 20000) iconSize = 4;
    const icon = document.createElement('div');
    icon.style.width = `${iconSize}px`;
    icon.style.height = `${iconSize}px`;
    icon.style.backgroundSize = `${iconSize}px ${iconSize}px`;
    icon.style.backgroundImage = `url(${markerTile})`;
    icon.style.cursor = 'pointer';
    return icon;
  }

  flyToCountry(currentFeature) {
    this.map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 4.5
    });
  }

  createPopUp(currentFeature, criterion) {
    const wordTotalLength = 5;
    this.popup = new Mapboxgl.Popup({ closeOnClick: false, closeButton: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(`<h3 class="popup-country">${currentFeature.properties.country}</h3>
                <p class="popup-totalInfo">Total ${criterion.slice(wordTotalLength)}: <span class="popup-count">${currentFeature.properties[criterion].toLocaleString()}</span></p> 
      
      `)
      .addTo(this.map);
  }

  addDisplayZoomControls() {
    this.map.addControl(new Mapboxgl.NavigationControl());
  }

  toggleButtons() {
    const buttons = Array.from(document.getElementsByClassName('button'));
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        buttons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
      })
    })
  }
}