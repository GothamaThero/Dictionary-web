package com.exonit_dictionary.backend.dictionary.language;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;


@RestController 
@RequestMapping ("/api/languages")
public class LanguageController {

    
    private final LanguageRepository repository;

    public LanguageController(LanguageRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<LanguageResponse> getLanguages(){
        return repository.findByEnabledTrueOrderByNameEnAsc()
                .stream()
                .map(LanguageResponse::from)
                .toList();
    }
    
    
}
