package com.maychine.ecommerce.model;

import com.maychine.ecommerce.entity.Fournisseur;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class FournisseurDto {

    private String name;
    private String tel;
    private String email;
    private String adress;
    private Integer idMagasin;

    public static Fournisseur convertTofurnisher(String name, String tel, String email, String adress, Integer idMagasin){
        Fournisseur fournisseur = new Fournisseur();
        fournisseur.setNameFournisseur(name);
        fournisseur.setTelFournisseur(tel);
        fournisseur.setEmailFournisseur(email);
        fournisseur.setAdressFournisseur(adress);
        fournisseur.setIdMagasin(idMagasin);
        return fournisseur;
    }
}
