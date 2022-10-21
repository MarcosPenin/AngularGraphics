import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DoublebarsComponent } from './pages/doublebars/doublebars.component';
import { DonaComponent } from './pages/dona/dona.component';
import { GraphicBarComponent } from './components/graphic-bar/graphic-bar.component';
import { DonahttpComponent } from './pages/donahttp/donahttp.component';



@NgModule({
  declarations: [
    BarsComponent,
    DoublebarsComponent,
    DonaComponent,
    GraphicBarComponent,
    DonahttpComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    NgChartsModule
  ]
})
export class GraphicsModule { }
