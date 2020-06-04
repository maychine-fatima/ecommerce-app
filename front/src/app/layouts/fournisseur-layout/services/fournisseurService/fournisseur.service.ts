import { Injectable } from '@angular/core';
import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Fournisseur } from '../../models/FournisseurModel';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  url_api = environment.url_dev + 'api/fournisseurs';

  constructor(private http: HttpClient) { }

  addFournisseur(newFournisseur: Fournisseur) {
    return this.http.post(this.url_api, newFournisseur)
  }

  getListFournisseur(idMagasin) {
    return this.http.get(this.url_api + '/' + idMagasin)
  }
}
