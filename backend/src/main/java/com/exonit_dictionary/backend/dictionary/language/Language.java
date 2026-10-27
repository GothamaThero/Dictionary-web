package com.exonit_dictionary.backend.dictionary.language;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity 
@Table(name = "languages")
@Getter 
@Setter 
@AllArgsConstructor 
@NoArgsConstructor 
public class Language {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 10)
    private String code;

    @Column (name = "name_en", nullable = false, length = 100)
    private String nameEn;

    @Column (name = "name_si", nullable = false, length = 100)
    private String nameSi;

    @Column (name = "script_code", nullable = false, length = 100)
    private String scriptCode;

    @Column (nullable = false)
    private boolean enabled;

    
}
