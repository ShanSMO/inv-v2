import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgxEchartsModule} from 'ngx-echarts';
import * as echarts from 'echarts';
import 'echarts/theme/macarons.js';
import 'echarts/dist/extension/bmap.min.js';
import {CitCommonModule} from '../cit-common/cit-common.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    CitCommonModule
  ]
})
export class DashboardModule { }
