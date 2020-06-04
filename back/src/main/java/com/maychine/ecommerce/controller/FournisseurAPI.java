package com.maychine.ecommerce.controller;

import com.maychine.ecommerce.model.FournisseurDto;
import com.maychine.ecommerce.service.FournisseurService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/fournisseurs")
@RequiredArgsConstructor
public class FournisseurAPI {
    private final FournisseurService fournisseurService;


    @GetMapping("/{idMagasin}")
    public ResponseEntity<List<FournisseurDto>> findAll(@PathVariable Integer idMagasin){
        return ResponseEntity.ok(fournisseurService.findAllByMagasin(idMagasin));
    }

    @PostMapping
    public ResponseEntity create(@Valid @RequestBody FournisseurDto fournisseurDto){
        return ResponseEntity.ok(fournisseurService.save(fournisseurDto));
    }
}
