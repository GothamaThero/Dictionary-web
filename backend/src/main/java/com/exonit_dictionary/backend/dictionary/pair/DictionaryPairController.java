package com.exonit_dictionary.backend.dictionary.pair;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/dictionary-pairs")
public class DictionaryPairController {

     private final DictionaryPairRepository repository;

    public DictionaryPairController(DictionaryPairRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<DictionaryPairResponse> getDictionaryPairs() {
        return repository.findByEnabledTrueOrderByDisplayNameAsc()
                .stream()
                .map(DictionaryPairResponse::from)
                .toList();
    }
    
}
