package com.maychine.ecommerce.service;

import com.maychine.ecommerce.entity.Produit;
import com.maychine.ecommerce.model.ProduitDto;
import com.maychine.ecommerce.repository.ProduitRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProduitService {

    private final ProduitRepository produitRepository;

    public List<ProduitDto> findAllByMagasin(Integer idMagasin) {
        // Add Log Here
        List<Produit> allProductByMagasin = produitRepository.findAllByMagasin(idMagasin);
        return allProductByMagasin.stream()
                .map(product -> new ProduitDto(product.getCouleurProduit(), product.getDesignationProduit(), product.getPrixProduit(), product.getDepartementProduit(), product.getQuantiteDispoProduit(), product.getIdMagasin()))
                .collect(Collectors.toList());
    }


    public Produit save(ProduitDto produitDto){
        // Add Log Here
        Produit produit = produitDto.convertToProduct();
        return produitRepository.save(produit);
    }

}
