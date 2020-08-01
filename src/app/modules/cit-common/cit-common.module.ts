import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopNavComponent} from './top-nav/top-nav.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {TopNavNotificationComponent} from './top-nav-notification/top-nav-notification.component';
import {RouterModule} from '@angular/router';
import {ToastrModule} from 'ngx-toastr';
import { CitToastComponent } from './cit-toast/cit-toast.component';

@NgModule({
  declarations: [
    TopNavComponent,
    SideBarComponent,
    TopNavNotificationComponent,
    CitToastComponent
  ],
  exports: [
    SideBarComponent,
    TopNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot()
  ]
})
export class CitCommonModule {
}
