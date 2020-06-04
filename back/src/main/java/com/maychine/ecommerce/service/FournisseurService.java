package com.maychine.ecommerce.service;

import com.maychine.ecommerce.entity.Fournisseur;
import com.maychine.ecommerce.model.FournisseurDto;
import com.maychine.ecommerce.repository.FournisseurRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FournisseurService {


    private final FournisseurRepository fournisseurRepository;

    public List<FournisseurDto> findAllByMagasin(Integer idMagasin) {
        List<FournisseurDto> result = new ArrayList<FournisseurDto>();
        for (Fournisseur fournisseur : fournisseurRepository.findAllByMagasin(idMagasin)) {
            result.add(new FournisseurDto(fournisseur.getNameFournisseur(), fournisseur.getTelFournisseur(), fournisseur.getEmailFournisseur(), fournisseur.getAdressFournisseur(), fournisseur.getIdMagasin()));
        }
        return result;
    }


    public Fournisseur save(FournisseurDto fournisseurDto){
        Fournisseur fournisseur = FournisseurDto.convertTofurnisher(fournisseurDto.getName(),fournisseurDto.getTel(),fournisseurDto.getEmail(),fournisseurDto.getAdress(),fournisseurDto.getIdMagasin());
        return fournisseurRepository.save(fournisseur);
    }
}
