import { Injectable } from '@angular/core';
import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../../models/produitModel';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  url_api = environment.url_dev + 'api/produits';

  constructor(private http: HttpClient) { }

  addProduct(newProduct: Produit) {
    return this.http.post(this.url_api, newProduct)
  }

  getListProduit(idMagasin) {
    return this.http.get(this.url_api + '/' + idMagasin)
  }
}
