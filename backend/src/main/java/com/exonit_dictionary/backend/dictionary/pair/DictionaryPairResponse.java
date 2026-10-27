package com.exonit_dictionary.backend.dictionary.pair;

public record DictionaryPairResponse (


        Long id,
        String slug,
        String displayName,
        LanguageSummary sourceLanguage,
        LanguageSummary targetLanguage
) {
    public record LanguageSummary(
            String code,
            String name
    ) {
    }

    public static DictionaryPairResponse from(DictionaryPair pair) {
        return new DictionaryPairResponse(
                pair.getId(),
                pair.getSlug(),
                pair.getDisplayName(),
                new LanguageSummary(
                        pair.getSourceLanguage().getCode(),
                        pair.getSourceLanguage().getNameEn()
                ),
                new LanguageSummary(
                        pair.getTargetLanguage().getCode(),
                        pair.getTargetLanguage().getNameEn()
                )
        );
    }
    
}
