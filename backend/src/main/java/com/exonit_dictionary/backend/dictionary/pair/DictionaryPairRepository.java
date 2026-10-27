package com.exonit_dictionary.backend.dictionary.pair;

import java.util.List;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DictionaryPairRepository extends JpaRepository<DictionaryPair, Long> {

    @EntityGraph(attributePaths = {"sourceLanguage", "targetLanguage"})
    List<DictionaryPair> findByEnabledTrueOrderByDisplayNameAsc();
    
}
