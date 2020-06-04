package com.maychine.ecommerce.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Data
@Table(name = "produit")
public class Produit implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "designation_produit")
    private String designationProduit;

    @Column(name = "prix_produit")
    private long prixProduit;

    @Column(name = "couleur_produit")
    private String couleurProduit;

    @Column(name = "quantite_dispo_produit")
    private Integer quantiteDispoProduit;

    @Column(name = "departement_produit")
    private String departementProduit;

    @Column(name = "id_magasin")
    private Integer idMagasin;

    @CreationTimestamp
    @Column(name = "created_date_produit")
    private Date produitCreatedDate;

    @UpdateTimestamp
    @Column(name = "updated_date_produit")
    private Date produitUpdatedDate;
}
