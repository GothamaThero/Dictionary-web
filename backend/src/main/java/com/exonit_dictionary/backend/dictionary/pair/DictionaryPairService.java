package com.exonit_dictionary.backend.dictionary.pair;

import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class DictionaryPairService {

    private final DictionaryPairRepository repository;

    public DictionaryPairService(DictionaryPairRepository repository) {
        this.repository = repository;
    }

    public List<DictionaryPairResponse> getActiveDictionaryPairs() {
        return repository.findByEnabledTrueOrderByDisplayNameAsc()
                .stream()
                .map(DictionaryPairResponse::from)
                .toList();
    }
}
