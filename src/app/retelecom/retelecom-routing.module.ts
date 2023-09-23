import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetelecomNewPurchaseComponent } from './purchases/retelecom-new-purchase/retelecom-new-purchase.component';
import { RetelecomEditPurchaseComponent } from './purchases/retelecom-edit-purchase/retelecom-edit-purchase.component';
import { RetelecomNewSaleComponent } from './sales/retelecom-new-sale/retelecom-new-sale.component';
import { RetelecomEditSaleComponent } from './sales/retelecom-edit-sale/retelecom-edit-sale.component';

const routes: Routes = [
  {
    path:'Compras',
    children:[
      {path:'RetelecomNuevaCompra', component: RetelecomNewPurchaseComponent},
      {path:'RetelecomEditarCompra', component: RetelecomEditPurchaseComponent}
    ]
  },
  {
    path:'Ventas',
    children:[

      {path:'RetelecomNuevaVenta', component:RetelecomNewSaleComponent},
      {path:'RetelecomEditarVenta', component:RetelecomEditSaleComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetelecomRoutingModule { }
