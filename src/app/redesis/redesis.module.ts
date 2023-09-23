import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedesisRoutingModule } from './redesis-routing.module';
import { RedesisEditPurchaseComponent } from './purchases/redesis-edit-purchase/redesis-edit-purchase.component';
import { RedesisNewPurchaseComponent } from './purchases/redesis-new-purchase/redesis-new-purchase.component';
import { RedesisEditSaleComponent } from './sales/redesis-edit-sale/redesis-edit-sale.component';
import { RedesisNewSaleComponent } from './sales/redesis-new-sale/redesis-new-sale.component';


@NgModule({
  declarations: [
    RedesisEditPurchaseComponent,
    RedesisNewPurchaseComponent,
    RedesisEditSaleComponent,
    RedesisNewSaleComponent
  ],
  imports: [
    CommonModule,
    RedesisRoutingModule
  ]
})
export class RedesisModule { }
