package com.exonit_dictionary.backend.dictionary.language;

public record LanguageResponse(
    Long id,
    String code,
    String nameEn,
    String nameSi,
    String scriptCode
) {
    
    public static LanguageResponse from(Language language) {

        return new LanguageResponse(
                language.getId(),
                language.getCode(),
                language.getNameEn(),
                language.getNameSi(),
                language.getScriptCode()
        );
    }
}
