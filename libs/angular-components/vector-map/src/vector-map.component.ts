import { Component, Input, OnChanges, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'uxg-vector-map',
  templateUrl: './vector-map.component.html',
  styleUrls: ['./vector-map.component.scss']
})
export class VectorMapComponent implements OnInit, OnChanges {
  @Input() data: any[];
  @Input() displayField: string[];
  @Input() valueField: string[];
  @Input() width: number;
  @Input() height: number;
  @Input() showcountriesCheck: boolean;
  @Input() showlandCheck: boolean;
  @Input() showborderMap: boolean;
  @Input() showcoastLines: boolean;
  @Input() landColor: string;
  @Input() countryColor: string;
  @Input() clickModeStatus: string;
  @Input() colorbarTitle: any;
  @Input() colorbarColorMin: any;
  @Input() colorbarColorMax: any;
  @Input() titleMap: string;
  @Input() centerPos: number[];
  @Input() countryNameType: 'country names' | 'ISO-3' | 'USA-states';
  @Output() countryClick: EventEmitter<any> = new EventEmitter<any>();

  mapDataField = '';
  graph: any;

  private _colorbarTitle = 'ColorBar Title';
  private _colorbarColorMin = '#9E75FF';
  private _colorbarColorMax = '#302463';
  private _clickModeStatus = 'select+event';
  private _titleMap = 'Title Map';
  /* private _width=1400;
  private _height=600; */
  private _landColor = 'rgb(210, 210, 210)';
  private _countryColor = '#a8a8a8';
  private _showlandCheck = true;
  private _showcountriesCheck = true;
  private _showborderMap = false;
  private _showcoastLines = true;
  private _centerPos = [2.35, 48.86];
  private _countryNameType = 'country names';

  private _filter: any;
  /*  @Input()
  set set_filter(filter) {
    this._filter = filter;
    this.filterDisplayData();
  }
  get set_filter() {
    return this._filter;
  }
  filterDisplayData() {
    const filteredData = {};
    this.graph.data = filteredData;
  } */
  constructor() {}
  emitterData(e) {
    const clickCountryIndexs = e.points[0].data.selectedpoints || [];
    const selectData = [];
    for (let i = 0; i < clickCountryIndexs.length; i++) {
      selectData.push(this.data[clickCountryIndexs[i]]);
    }
    this.countryClick.emit({
      data: selectData
    });
  }

  ngOnInit(): void {}
  ngOnChanges(simpleChanges) {
    this.graph = {
      data: [
        {
          hoverinfo: 'text',
          type: 'choropleth',
          locationmode: this.countryNameType !== undefined ? this.countryNameType : this._countryNameType,
          locations: this.data.map(dataItem => dataItem.country),
          /* z: this.data.map(dataItem => dataItem.value), */

          z: this.data.map(item => {
            return item[this.valueField[this.mapDataField ? this.mapDataField : 0]];
          }),
          text: this.data.map(dataItem => {
            let text = '';
            this.displayField.forEach(field => {
              text += '<br>' + dataItem[field];
            });
            return text;
          }),
          colorbar: { title: { text: this.colorbarTitle ? this.colorbarTitle : this._colorbarTitle } },
          colorscale: [
            [0, this.colorbarColorMin ? this.colorbarColorMin : this._colorbarColorMin],
            [1, this.colorbarColorMax ? this.colorbarColorMax : this._colorbarColorMax]
          ]
        }
      ],
      layout: {
        showlegend: false,
        autosize: true,
        responsize: true,
        clickmode: this.clickModeStatus ? this.clickModeStatus : this._clickModeStatus,
        title: this.titleMap ? this.titleMap : this._titleMap,
        /* width:  this.width ?
          this.width: 
          this._width,
        height: this.height ?
          this.height:
          this._height, */

        geo: {
          bgcolor: 'rgb(255, 255, 255)',
          showland: this.showlandCheck !== undefined ? this.showlandCheck : this._showlandCheck,
          landcolor: this.landColor ? this.landColor : this._landColor,
          showcountries: this.showcountriesCheck !== undefined ? this.showcountriesCheck : this._showcountriesCheck,
          countrycolor: this.countryColor ? this.countryColor : this._countryColor,
          showframe: this.showborderMap !== undefined ? this.showborderMap : this._showborderMap,
          showcoastlines: this.showcoastLines !== undefined ? this.showcoastLines : this._showcoastLines,
          center: {
            lat: this.centerPos ? this.centerPos[1] : this._centerPos[1],
            lon: this.centerPos ? this.centerPos[0] : this._centerPos[0]
          },
          projection: {
            scale: 2,
            type: 'mercator'
          }
        }
      },
      config: {
        displaylogo: false
      }
    };
  }
}
