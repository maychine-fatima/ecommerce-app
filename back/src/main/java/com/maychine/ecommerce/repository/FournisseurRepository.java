package com.maychine.ecommerce.repository;

import com.maychine.ecommerce.entity.Fournisseur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FournisseurRepository extends JpaRepository<Fournisseur,Integer> {

    @Query("SELECT f FROM Fournisseur f WHERE  f.idMagasin = :idMagasin")
     List<Fournisseur> findAllByMagasin(@Param("idMagasin") Integer idMagasin );
}
