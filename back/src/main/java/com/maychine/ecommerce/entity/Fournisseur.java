package com.maychine.ecommerce.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name = "fournisseur")
public class Fournisseur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name_fournisseur")
    private String nameFournisseur;

    @Column(name = "tel_fournisseur")
    private String telFournisseur;

    @Column(name = "email_fournisseur")
    private String emailFournisseur;

    @Column(name = "adress_fournisseur")
    private String adressFournisseur;

    @Column(name = "id_magasin")
    private Integer idMagasin;

    @CreationTimestamp
    @Column(name = "created_date_fournisseur")
    private Date CreatedDateFournisseur;

    @UpdateTimestamp
    @Column(name = "updated_date_fournisseur")
    private Date updatedDateFournisseur;
}
