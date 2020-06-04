import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurTableComponent } from './components/fournisseur-table/fournisseur-table.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FournisseurLayoutRoutes } from './fournisseur-layout.routing';
import { AddFournisseurComponent } from './modals/add-fournisseur/add-fournisseur.component';
import { FournisseurService } from './services/fournisseurService/fournisseur.service';


@NgModule({
  declarations: [FournisseurTableComponent, AddFournisseurComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(FournisseurLayoutRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [FournisseurService]
})
export class FournisseurLayoutModule { }
