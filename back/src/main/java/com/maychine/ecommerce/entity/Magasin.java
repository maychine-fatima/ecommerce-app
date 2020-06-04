package com.maychine.ecommerce.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Magasin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nameMagasin;
    private String adressMagasin;
    private String telMagasin;
    private Boolean sessionIsActivated;
    private Integer sessionMonth;
    private Date sessionFinishedDate;
}
