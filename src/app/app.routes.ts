import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {BlankLayoutComponent} from './modules/layouts/blank-layout/blank-layout.component';
import {ContainerLayoutComponent} from './modules/layouts/container-layout/container-layout.component';
import {DashboardComponent} from './modules/dashboard/dashboard/dashboard.component';
import {OnlinePaymentComponent} from './modules/payment/online-payment/online-payment.component';
import {WarehouseComponent} from './modules/warehouse/warehouse/warehouse.component';
import {SuppliersComponent} from './modules/supplier/suppliers/suppliers.component';
import {ProductsComponent} from './modules/product/products/products.component';
import {WarehouseAddComponent} from './modules/warehouse/warehouse-add/warehouse-add.component';
import {PosComponent} from './modules/pos/pos/pos.component';

export const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      {path: '', component: BlankLayoutComponent, children: []},
      {path: '', component: ContainerLayoutComponent, children: [
          {path: 'dashboard', component: DashboardComponent},
          {path: 'payment', component: OnlinePaymentComponent},
          {path: 'warehouses', component: WarehouseComponent},
          {path: 'warehouses-add', component: WarehouseAddComponent},
          {path: 'suppliers', component: SuppliersComponent},
          {path: 'products', component: ProductsComponent},
          {path: 'pos', component: PosComponent}
        ]},
    ]
  }
];
