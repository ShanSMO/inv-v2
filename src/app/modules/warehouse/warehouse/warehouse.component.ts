import { Component, OnInit } from '@angular/core';
import * as ol from '../../../../assets/libs/open-layers-map/ol-v6-3-1';
import {Icon, Style} from 'ol/style';

@Component({
  selector: 'c-inv-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.sass']
})
export class WarehouseComponent implements OnInit {

  warehouseList: any[] = [
    {id: 0, code: 'WH-001', location: 'No 25/2, Dodangoda , Kalutara', contact: '0766254532'},
    {id: 0, code: 'WH-002', location: 'Main Road, Deniyaya', contact: '0112255445'},
    {id: 0, code: 'WH-003', location: 'Kalutara', contact: '0766254532'},
    {id: 0, code: 'CC Tech Sub Store', location: 'Kalutara', contact: '0766254532'},
    {id: 0, code: 'WH-00112', location: 'Kalutara', contact: '0766254532'},
    {id: 0, code: 'WH-003', location: 'Kalutara', contact: '0766254532'},
    {id: 0, code: 'WH-0044', location: 'Kalutara', contact: '0766254532'},
    {id: 0, code: 'WH-0022', location: 'Kalutara', contact: '0766254532'},
    {id: 0, code: 'WH-0011', location: 'Kalutara', contact: '0766254532'},
    {id: 0, code: 'WH-0031', location: 'Kalutara', contact: '0766254532'},
  ];

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  initMap() {
    const iconFeature = new ol.Feature({
      geometry: new ol.geom.Point([0, 0]),
      name: 'Null Island',
      population: 4000,
      rainfall: 500
    });

    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'src/assets/images/avatar.png'
      })
    });

    iconFeature.setStyle(iconStyle);


    const map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Vector({
          source: new ol.source.Vector({
            features: [
              iconFeature
            ]
          })
        }),
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([79.8612, 6.9271]),
        zoom: 9
      })
    });

    const layer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [
          new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([37.41, 8.82]))
          }) ,
          new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([38.41, 8.82]))
          })
        ]
      })
    });
    map.addLayer(layer);

  }

}
