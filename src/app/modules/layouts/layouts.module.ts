import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { ContainerLayoutComponent } from './container-layout/container-layout.component';
import {RouterModule} from '@angular/router';
import {CitCommonModule} from '../cit-common/cit-common.module';

@NgModule({
  declarations: [
    BlankLayoutComponent,
    ContainerLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CitCommonModule
  ]
})
export class LayoutsModule { }
