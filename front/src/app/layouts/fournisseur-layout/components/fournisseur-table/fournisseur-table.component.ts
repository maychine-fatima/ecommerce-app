import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HEADERS_FOURNISSEUR_TABLE } from '../../models/headers_fournisseur_table.const';
import { FournisseurService } from '../../services/fournisseurService/fournisseur.service';
import { AddFournisseurComponent } from '../../modals/add-fournisseur/add-fournisseur.component';


@Component({
  selector: 'app-fournisseur-table',
  templateUrl: './fournisseur-table.component.html',
  styleUrls: ['./fournisseur-table.component.css']
})
export class FournisseurTableComponent implements OnInit {

  culumns_table = HEADERS_FOURNISSEUR_TABLE;
  dataTable: any[] = []

  constructor(private modalService: NgbModal, private fournisseurService: FournisseurService) {
    //to do
    const idMagasin = 1
    this.getDataTable(idMagasin);
  }

  ngOnInit(): void {
  }

  addFournisseur() {
    const modalRef = this.modalService.open(AddFournisseurComponent);
    modalRef.result.then(
      res => {
        this.fournisseurService.addFournisseur(res).subscribe(
          (_) => { this.dataTable.push(res) },
          (error) => { console.log('error') }
        )
      }
    )
  }

  getDataTable(idMagasin) {
    this.fournisseurService.getListFournisseur(idMagasin).subscribe(
      (data: []) => {
        this.dataTable = data;
      },
      err => { console.log('error') }
    )
  }



}


