import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StockLayoutRoutes } from './stock-layout.routing';
import { StockTableComponent } from './components/stock-table/stock-table.component';
import { AddProductComponent } from './modals/add-product/add-product.component';
import { ProduitService } from './services/produitService/produit.service';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(StockLayoutRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [
    StockTableComponent,
    AddProductComponent
  ],
  providers: [ProduitService]
})
export class StockLayoutModule { }
