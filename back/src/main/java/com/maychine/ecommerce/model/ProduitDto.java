package com.maychine.ecommerce.model;

import com.maychine.ecommerce.entity.Produit;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ProduitDto {

    private String couleur;
    private String designation;
    private long prix;
    private String departement;
    private Integer quantite;
    private Integer idMagasin;

    public Produit convertToProduct(){
        Produit produit = new Produit();
        produit.setCouleurProduit(couleur);
        produit.setDesignationProduit(designation);
        produit.setPrixProduit(prix);
        produit.setDepartementProduit(departement);
        produit.setQuantiteDispoProduit(quantite);
        produit.setIdMagasin(idMagasin);
        return produit;
    }




}
