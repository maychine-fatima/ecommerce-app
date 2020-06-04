import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashLayoutComponent } from './layouts/dash-layout/dash-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { StockLayoutComponent } from './layouts/stock-layout/stock-layout.component';
import { FournisseurLayoutComponent } from './layouts/fournisseur-layout/fournisseur-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DashLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/dash-layout/dash-layout.module#DashLayoutModule'
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  }
  ,
  {
    path: '',
    component: StockLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/stock-layout/stock-layout.module#StockLayoutModule'
      }
    ]
  },
  {
    path: '',
    component: FournisseurLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/fournisseur-layout/fournisseur-layout.module#FournisseurLayoutModule'
      }
    ]
  }
  , {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
