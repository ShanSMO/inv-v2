import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopNavNotificationComponent } from './top-nav-notification/top-nav-notification.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    TopNavComponent,
    SideBarComponent,
    TopNavNotificationComponent
  ],
  exports: [
    SideBarComponent,
    TopNavComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class CitCommonModule { }
