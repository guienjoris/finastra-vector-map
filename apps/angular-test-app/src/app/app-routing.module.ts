import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@ffdc/uxg-angular-components';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';
import { HomeComponent } from './components/home/home.component';
import { PopoverDemoComponent } from './components/popover-demo/popover-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';
import { routes } from './routes';
import { MaterialModule } from './material.module';
import { VectorMapDemoComponent } from './components/vector-map-demo/vector-map-demo.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, MaterialModule, ComponentsModule, RouterModule.forRoot(routes), FormsModule],
  declarations: [
    HomeComponent,
    GlobalSearchDemoComponent,
    TableDemoComponent,
    PopoverDemoComponent,
    VectorMapDemoComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
