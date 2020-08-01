import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {LayoutsModule} from './modules/layouts/layouts.module';
import {DashboardModule} from './modules/dashboard/dashboard.module';
import {CitCommonModule} from './modules/cit-common/cit-common.module';
import {WarehouseModule} from './modules/warehouse/warehouse.module';
import {SupplierModule} from './modules/supplier/supplier.module';
import {ProductModule} from './modules/product/product.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {PosModule} from './modules/pos/pos.module';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CitToastComponent} from './modules/cit-common/cit-toast/cit-toast.component';
import {OauthModule} from './modules/oauth/oauth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LayoutsModule,
    DashboardModule,
    CitCommonModule,
    WarehouseModule,
    SupplierModule,
    ProductModule,
    NgSelectModule,
    OauthModule,
    PosModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      toastComponent: CitToastComponent
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
