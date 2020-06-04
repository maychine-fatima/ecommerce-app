import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { OptionsAccount } from './../../../../variables/account';
import { Fournisseur } from '../../models/FournisseurModel';
import { FournisseurService } from '../../services/fournisseurService/fournisseur.service';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent implements OnInit {

  FournisseurForm;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private fournisseurService: FournisseurService) {
    //to do
    const idMagasin = 1
    this.FournisseurForm = this.formBuilder.group(new Fournisseur('', '', '', '', idMagasin))
    console.log(this.FournisseurForm)
  }

  ngOnInit(): void {
  }

  saveProduct(newFournisseur: Fournisseur) {
    this.activeModal.close(newFournisseur);
  }

}
