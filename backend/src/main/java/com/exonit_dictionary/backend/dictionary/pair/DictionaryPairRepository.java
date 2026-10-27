package com.exonit_dictionary.backend.dictionary.pair;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DictionaryPairRepository extends JpaRepository<DictionaryPair, Long> {

    List<DictionaryPair> findByEnabledTrueOrderByDisplayNameAsc();
    
}
