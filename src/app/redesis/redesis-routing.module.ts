import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedesisNewPurchaseComponent } from './purchases/redesis-new-purchase/redesis-new-purchase.component';
import { RedesisEditPurchaseComponent } from './purchases/redesis-edit-purchase/redesis-edit-purchase.component';
import { RedesisNewSaleComponent } from './sales/redesis-new-sale/redesis-new-sale.component';
import { RedesisEditSaleComponent } from './sales/redesis-edit-sale/redesis-edit-sale.component';

const routes: Routes = [
  {
    path:'Compras',
    children:[
      {path:'RedesisNuevaCompra', component: RedesisNewPurchaseComponent},
      {path:'RedesisEditarCompra', component: RedesisEditPurchaseComponent}
    ]
  },
  {
    path:'ventas',
    children:[

      {path:'RedesisNuevaVenta', component:RedesisNewSaleComponent},
      {path:'RedesisEditarVenta', component:RedesisEditSaleComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedesisRoutingModule { }
