package com.maychine.ecommerce.repository;

import com.maychine.ecommerce.entity.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProduitRepository extends JpaRepository<Produit,Integer> {

    @Query("SELECT p FROM Produit p WHERE  p.idMagasin = :idMagasin")
    List<Produit> findAllByMagasin(@Param("idMagasin") Integer idMagasin );

    // Try to use this if it's work
    List<Produit> findAllByIdMagasin(Integer idMagasin);
}
