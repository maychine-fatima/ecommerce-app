import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AddProductComponent } from '../../modals/add-product/add-product.component';
import { HEADERS_STOCK_TABLE } from '../../models/headers_stock_table.const';
import { ProduitService } from '../../services/produitService/produit.service';
import { Produit } from '../../models/produitModel';

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.css']
})
export class StockTableComponent implements OnInit {

  culumns_table = HEADERS_STOCK_TABLE;
  dataTable: any[] = []

  constructor(private modalService: NgbModal, private produitService: ProduitService) {
    //to do
    const idMagasin = 1
    this.getDataTable(idMagasin);
  }

  ngOnInit(): void {
  }

  addProduct() {
    const modalRef = this.modalService.open(AddProductComponent);
    modalRef.result.then(
      res => {
        this.produitService.addProduct(res).subscribe(
          (_) => { this.dataTable.push(res) },
          (error) => { console.log('error') }
        )
      }
    )
  }

  getDataTable(idMagasin) {
    this.produitService.getListProduit(idMagasin).subscribe(
      (data: []) => {
        this.dataTable = data;
      },
      err => { console.log('error') }
    )
  }



}


