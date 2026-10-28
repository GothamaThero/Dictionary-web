package com.exonit_dictionary.backend.dictionary.language;

import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class LanguageService {

    private final LanguageRepository repository;

    public LanguageService(LanguageRepository repository) {
        this.repository = repository;
    }

    public List<LanguageResponse> getActiveLanguages() {
        return repository.findByEnabledTrueOrderByNameEnAsc()
                .stream()
                .map(LanguageResponse::from)
                .toList();
    }
}
