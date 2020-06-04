import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { Produit } from '../../models/produitModel';
import { OptionsAccount } from './../../../../variables/account';
import { ProduitService } from '../../services/produitService/produit.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  ProductForm;
  currency: String = OptionsAccount.options.currency

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private produitService: ProduitService) {
    const idMagasin = 1
    this.ProductForm = this.formBuilder.group(new Produit('', '', 0, '', 0, idMagasin))
    console.log(this.ProductForm)
  }

  ngOnInit(): void {
  }

  saveProduct(newProduct: Produit) {
    newProduct.prix = Number(newProduct.prix)
    newProduct.quantite = Number(newProduct.quantite)
    this.activeModal.close(newProduct);
  }

}
