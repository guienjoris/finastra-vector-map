import { NgModule } from '@angular/core';
import { VectorMapComponent } from './vector-map.component';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';
import { CommonModule } from '@angular/common';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  imports: [CommonModule, PlotlyModule],
  declarations: [VectorMapComponent],
  exports: [VectorMapComponent]
})
export class VectorMapModule {}
