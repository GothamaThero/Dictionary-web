package com.exonit_dictionary.backend.dictionary.pair;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/dictionary-pairs")
public class DictionaryPairController {

    private final DictionaryPairService service;

    public DictionaryPairController(DictionaryPairService service) {
        this.service = service;
    }

    @GetMapping
    public List<DictionaryPairResponse> getDictionaryPairs() {
        return service.getActiveDictionaryPairs();
    }
}
