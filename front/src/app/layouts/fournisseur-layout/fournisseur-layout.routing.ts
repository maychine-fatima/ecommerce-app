import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FournisseurTableComponent } from './components/fournisseur-table/fournisseur-table.component';


export const FournisseurLayoutRoutes: Routes = [
  { path: 'fournisseur', component: FournisseurTableComponent }
];

