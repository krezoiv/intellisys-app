import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedesisRoutingModule } from './redesis/redesis-routing.module';
import { RetelecomRoutingModule } from './retelecom/retelecom-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';

const routes: Routes = [
  {
    path: 'authentication/login',
    redirectTo: 'authentication/login',
    pathMatch: 'full',
  },
  {
    path: 'authentication/login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'redesis',
    loadChildren: () =>
      import('./redesis/redesis.module').then((m) => m.RedesisModule),
  },
  {
    path: 'retelecom',
    loadChildren: () =>
      import('./retelecom/retelecom.module').then((m) => m.RetelecomModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RedesisRoutingModule,
    RetelecomRoutingModule,
    AuthRoutingModule,
    HomeRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
