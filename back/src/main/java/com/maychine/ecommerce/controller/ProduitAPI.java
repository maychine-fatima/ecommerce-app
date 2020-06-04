package com.maychine.ecommerce.controller;

import com.maychine.ecommerce.entity.Produit;
import com.maychine.ecommerce.model.ProduitDto;
import com.maychine.ecommerce.service.ProduitService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/produits")
@RequiredArgsConstructor
public class ProduitAPI {
    private final ProduitService produitService;


    @GetMapping("/{idMagasin}")
    public HttpEntity<List<ProduitDto>> findAllProduct(@PathVariable Integer idMagasin){
        return ResponseEntity.ok(produitService.findAllByMagasin(idMagasin));
    }

    @PostMapping
    public HttpEntity<Produit> create(@Valid @RequestBody ProduitDto produitDto){
        // Log Here
        Produit savedProduct = produitService.save(produitDto);
        // Log Here
        // You Should Return ProduitDto Not Produit
        return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
    }

}
