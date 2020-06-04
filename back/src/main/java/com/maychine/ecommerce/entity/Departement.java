package com.maychine.ecommerce.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "departement")
public class Departement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name_departement")
    private String nameDepartement;

    @Column(name = "id_magasin")
    private Integer idMagasin;
}
