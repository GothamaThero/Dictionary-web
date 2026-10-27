
CREATE TABLE languages (
    id BIGINT NOT NULL AUTO_INCREMENT,
    code VARCHAR(10) NOT NULL,
    name_en VARCHAR(100) NOT NULL,
    name_si VARCHAR(100) NOT NULL,
    script_code VARCHAR(20) NOT NULL,
    enabled BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT pk_languages PRIMARY KEY (id),
    CONSTRAINT uq_languages_code UNIQUE (code)
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_unicode_ci;

CREATE TABLE dictionary_pairs (
    id BIGINT NOT NULL AUTO_INCREMENT,
    source_language_id BIGINT NOT NULL,
    target_language_id BIGINT NOT NULL,
    slug VARCHAR(100) NOT NULL,
    display_name VARCHAR(200) NOT NULL,
    enabled BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT pk_dictionary_pairs PRIMARY KEY (id),
    CONSTRAINT uq_dictionary_pairs_slug UNIQUE (slug),
    CONSTRAINT uq_dictionary_pairs_languages
        UNIQUE (source_language_id, target_language_id),

    CONSTRAINT fk_pair_source_language
        FOREIGN KEY (source_language_id) REFERENCES languages(id),

    CONSTRAINT fk_pair_target_language
        FOREIGN KEY (target_language_id) REFERENCES languages(id)
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_unicode_ci;

INSERT INTO languages (code, name_en, name_si, script_code)
VALUES
    ('en', 'English', 'ඉංග්‍රීසි', 'Latn'),
    ('si', 'Sinhala', 'සිංහල', 'Sinh'),
    ('pi', 'Pali', 'පාලි', 'Sinh'),
    ('sa', 'Sanskrit', 'සංස්කෘත', 'Deva');

INSERT INTO dictionary_pairs
    (source_language_id, target_language_id, slug, display_name)
SELECT
    source_lang.id,
    target_lang.id,
    pairs.slug,
    pairs.display_name
FROM (
    SELECT 'en' AS source_code, 'si' AS target_code,
           'english-sinhala' AS slug,
           'English – Sinhala Dictionary' AS display_name
    UNION ALL
    SELECT 'si', 'si', 'sinhala-sinhala',
           'Sinhala – Sinhala Dictionary'
    UNION ALL
    SELECT 'pi', 'si', 'pali-sinhala',
           'Pali – Sinhala Dictionary'
    UNION ALL
    SELECT 'sa', 'si', 'sanskrit-sinhala',
           'Sanskrit – Sinhala Dictionary'
) AS pairs
JOIN languages AS source_lang
    ON source_lang.code = pairs.source_code
JOIN languages AS target_lang
    ON target_lang.code = pairs.target_code;
