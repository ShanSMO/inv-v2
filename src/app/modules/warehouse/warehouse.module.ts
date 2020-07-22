import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WarehouseAddComponent } from './warehouse-add/warehouse-add.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [WarehouseComponent, WarehouseAddComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class WarehouseModule { }
