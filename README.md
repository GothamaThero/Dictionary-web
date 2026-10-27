# Dictionary-web
# MASTER DEVELOPMENT REQUIREMENT — TRILINGUA LEXICON
## Continue and Complete the Existing Project Using Clean Architecture

### 1. Your Role

Act as a Senior Software Architect, Senior React + TypeScript Developer, Senior Java Spring Boot Developer, Database Designer, UI/UX Designer, Security Engineer, and QA Engineer.

Your task is to continue developing my existing project, **EXONIT DICTIONARIES**, into a professional, secure, responsive, multilingual dictionary platform.

Do not assume that the project is empty. First inspect the existing source code, project structure, database configuration, installed dependencies, and completed features. Preserve working code and build upon the existing implementation.

Do not unnecessarily recreate the project or replace working files.

If a feature is already implemented correctly, verify it and keep it. If it is partially implemented, improve it. If it is missing, implement it.

Work directly with the project files available in the workspace.

---

# 2. Project Overview

**Project Name:** EXONIT DICTIONARIES

**Tagline:** Discover Languages. Connect Knowledge. Preserve Heritage.

The platform must provide multilingual dictionary services with a scalable architecture that allows new languages and dictionary pairs to be added in the future.

Initial dictionary pairs:

1. English → Sinhala
2. Sinhala → Sinhala
3. Pali → Sinhala
4. Sanskrit → Sinhala

Future examples:

- Sinhala → English
- Tamil → Sinhala
- English → Pali
- Pali → English
- Sanskrit → English

The application must not hardcode these four dictionary pairs throughout the frontend or backend.

Languages and dictionary pairs must be database-driven and retrieved through REST APIs.

---

# 3. Mandatory Technology Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Lucide React
- Native Fetch API or an existing HTTP client already used by the project
- React Hooks for component state and lifecycle management

Use the existing versions and dependencies when they are compatible. Do not upgrade major versions without a clear reason.

## Backend

- Java 21
- Spring Boot 3.x
- Spring Web
- Spring Data JPA
- Spring Security
- JWT authentication
- Bean Validation
- Maven
- MySQL
- Flyway database migrations
- Spring Boot Actuator
- OpenAPI / Swagger
- JUnit 5
- Mockito

## Database

- MySQL
- UTF-8 support using utf8mb4
- Foreign keys
- Unique constraints
- Appropriate indexes
- Version-controlled Flyway migrations

---

# 4. Critical Backend Port Requirement

**The backend must run on port 9090, not port 8080.**

Configure:

server.port=9090

The frontend API base URL must use:

VITE_API_BASE_URL=http://localhost:9090

All frontend API requests must use the centralized API base URL.

Do not hardcode localhost:8080 anywhere in the frontend.

Search the complete project for old port references and update relevant development configuration, API services, CORS configuration, documentation, and test configuration.

Do not confuse the backend port with the frontend Vite development port. Vite can continue using its normal development port.

Use environment variables for deployment-specific configuration.

Provide `.env.example` files without real passwords, secrets, or private credentials.

---

# 5. Mandatory Arrow Function Requirement

Use **arrow functions consistently in the React + TypeScript frontend**.

Examples:

Correct:

const getDictionaryPairs = async (): Promise<DictionaryPair[]> => {
  // implementation
}

const handleSearch = (value: string): void => {
  // implementation
}

const DictionaryCard = ({ pair }: DictionaryCardProps) => {
  return (
    <div>{pair.displayName}</div>
  )
}

const filteredPairs = pairs.filter((pair) =>
  pair.displayName.toLowerCase().includes(search.toLowerCase())
)

Use arrow functions for:

- Event handlers
- Utility functions
- API service functions
- Custom hooks
- Array callbacks
- Validation functions
- Data transformation functions
- React functional components
- Promise callbacks
- Error handlers
- Form submission handlers
- State updater callbacks

Do not use traditional named function declarations for application functions or React components.

For example, prefer:

const App = () => {
  return <main>...</main>
}

Instead of:

function App() {
  return <main>...</main>
}

Do not unnecessarily replace standard framework APIs, constructors, class methods, or third-party library requirements. The arrow-function requirement primarily applies to application-level JavaScript and TypeScript functions.

Backend Java code must follow normal Java conventions. Arrow functions are not a Java language feature; use Java lambdas and method references where appropriate.

---

# 6. Mandatory Component-Based Frontend Architecture

Do not place the entire application inside one `App.tsx` file.

Separate the application into reusable components, pages, layouts, hooks, services, types, constants, utilities, and validation modules.

Use a feature-based architecture.

Recommended frontend structure:

frontend/
├── public/
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── router.tsx
│   │   └── providers.tsx
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── ErrorMessage.tsx
│   │   │   ├── EmptyState.tsx
│   │   │   └── Pagination.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── MainLayout.tsx
│   │   │   ├── AdminLayout.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileNavigation.tsx
│   │   │
│   │   ├── dictionary/
│   │   │   ├── DictionaryCard.tsx
│   │   │   ├── DictionaryGrid.tsx
│   │   │   ├── DictionarySearchBar.tsx
│   │   │   ├── SearchResults.tsx
│   │   │   ├── DictionaryEntryCard.tsx
│   │   │   ├── DictionaryEntryDetails.tsx
│   │   │   ├── WordSenseList.tsx
│   │   │   ├── ExampleSentenceList.tsx
│   │   │   ├── WordRelationshipList.tsx
│   │   │   └── PronunciationPlayer.tsx
│   │   │
│   │   └── admin/
│   │       ├── AdminSidebar.tsx
│   │       ├── AdminHeader.tsx
│   │       ├── EntryForm.tsx
│   │       ├── LanguageForm.tsx
│   │       ├── DictionaryPairForm.tsx
│   │       ├── MeaningEditor.tsx
│   │       ├── ExampleEditor.tsx
│   │       └── PublicationStatusBadge.tsx
│   │
│   ├── features/
│   │   ├── home/
│   │   │   └── pages/
│   │   │       └── HomePage.tsx
│   │   ├── dictionary/
│   │   │   ├── pages/
│   │   │   │   ├── DictionaryPage.tsx
│   │   │   │   └── EntryDetailPage.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useDictionaryPairs.ts
│   │   │   │   └── useDictionarySearch.ts
│   │   │   ├── services/
│   │   │   │   └── dictionaryService.ts
│   │   │   └── types/
│   │   │       └── dictionary.types.ts
│   │   │
│   │   ├── auth/
│   │   ├── favorites/
│   │   ├── vocabulary/
│   │   ├── learning/
│   │   └── admin/
│   │
│   ├── services/
│   │   ├── apiClient.ts
│   │   └── apiError.ts
│   │
│   ├── hooks/
│   ├── types/
│   ├── constants/
│   ├── utils/
│   ├── validation/
│   ├── styles/
│   │   └── index.css
│   └── main.tsx
│
├── .env.example
├── package.json
├── vite.config.ts
└── tsconfig.json

This is a recommended structure, not permission to create hundreds of empty files.

Create files when their functionality is implemented. Keep related feature files together, avoid duplicate components, and respect the existing project's conventions where appropriate.

---

# 7. Backend Layered Architecture

Do not put database queries, business rules, and HTTP response construction into a single controller.

Separate responsibilities.

Recommended structure:

backend/src/main/java/com/trilingua/lexicon/
├── BackendApplication.java
├── config/
│   ├── CorsConfig.java
│   ├── OpenApiConfig.java
│   └── JpaConfig.java
│
├── common/
│   ├── exception/
│   │   ├── GlobalExceptionHandler.java
│   │   ├── ResourceNotFoundException.java
│   │   ├── BusinessException.java
│   │   └── ApiErrorResponse.java
│   └── health/
│       └── HealthController.java
│
├── dictionary/
│   ├── language/
│   │   ├── Language.java
│   │   ├── LanguageRepository.java
│   │   ├── LanguageService.java
│   │   ├── LanguageController.java
│   │   ├── LanguageResponse.java
│   │   └── LanguageRequest.java
│   │
│   ├── pair/
│   │   ├── DictionaryPair.java
│   │   ├── DictionaryPairRepository.java
│   │   ├── DictionaryPairService.java
│   │   ├── DictionaryPairController.java
│   │   ├── DictionaryPairResponse.java
│   │   └── DictionaryPairRequest.java
│   │
│   ├── entry/
│   ├── search/
│   ├── sense/
│   ├── example/
│   ├── pronunciation/
│   ├── relationship/
│   └── source/
│
├── auth/
├── user/
├── favorites/
├── vocabulary/
├── learning/
└── admin/

Apply these responsibilities:

- Controller: HTTP endpoints, request binding, validation triggers, response codes.
- Service: business rules, transactions, workflow and orchestration.
- Repository: database access only.
- Entity: database persistence model.
- Request DTO: validated incoming data.
- Response DTO: safe API output.
- Mapper: conversions when they improve clarity.
- Exception handler: consistent API error responses.
- Configuration: application-wide settings.

Do not expose JPA entities directly from public API endpoints.

Use constructor injection. Avoid field injection.

Use `@Transactional` for appropriate multi-step write operations.

Use `@Transactional(readOnly = true)` for suitable read-only service operations.

Avoid unnecessary abstraction layers, but do not combine unrelated responsibilities.

---

# 8. Database and Language-Pair Architecture

Maintain a language-independent design.

## Languages

The `languages` table must support:

- id
- code
- name_en
- name_si
- script_code
- enabled
- created_at

Language codes must be unique.

## Dictionary pairs

The `dictionary_pairs` table must support:

- id
- source_language_id
- target_language_id
- slug
- display_name
- enabled
- created_at

Use foreign keys to the `languages` table.

Enforce unique slugs and unique source-target combinations unless a documented business requirement requires otherwise.

Sinhala → Sinhala must be supported.

## Important requirements

- Frontend cards must be loaded from `/api/dictionary-pairs`.
- Language lists must be loaded from `/api/languages`.
- Do not maintain a hardcoded frontend list of the four initial pairs.
- New languages and pairs must be addable through controlled admin operations or database configuration.
- All user-facing text should be prepared for English and Sinhala UI support.
- Use UTF-8 throughout the frontend, backend, HTTP responses, and database.
- Use Flyway migrations for schema changes.
- Do not delete existing migrations that have already run in a database.
- Add a new migration for every subsequent schema change.
- Never use `spring.jpa.hibernate.ddl-auto=create` or `update` in production.
- Use `validate` when the schema is managed by Flyway and entity mappings match the schema.

Preserve the four existing initial dictionary pairs if already seeded.

---

# 9. Dictionary Content Model

Implement a normalized and extensible dictionary data model.

Required or planned entities:

1. Language
2. DictionaryPair
3. DictionaryEntry
4. WordSense
5. ExampleSentence
6. Pronunciation
7. WordForm
8. WordRelationship
9. WordTranslation
10. Source
11. EntrySource
12. EntryRevision

The `dictionary_entries` table must include fields suitable for:

- id
- language_id
- word
- slug
- transliteration when relevant
- status
- editorial notes when appropriate
- created_by
- created_at
- updated_at

A word can have multiple meanings, so use `word_senses` instead of storing every meaning in a single text field.

Support:

- Part of speech
- Sinhala definitions
- English definitions where relevant
- Usage labels
- Domain or subject labels
- Usage notes
- Example sentences
- Sinhala translations of examples
- Word forms
- Synonyms
- Antonyms
- Related words
- Cross-language translations
- Pronunciation IPA
- Verified British and American pronunciation data where available
- Audio URL and attribution/source metadata
- Dictionary source references

Model cross-language translations using relationships between entries, with the option to link a translation to a particular sense.

Avoid fabricating definitions, scholarly citations, pronunciation data, etymologies, or audio URLs.

Record source and licensing information where content is imported or sourced externally.

Use original editorial content or properly licensed source material.

---

# 10. Content Publishing Workflow

Implement the content status workflow:

DRAFT → IN_REVIEW → PUBLISHED → ARCHIVED

Rules:

- Public endpoints must return only PUBLISHED entries.
- Draft entries must never be visible publicly.
- Entries in review must never be visible publicly.
- Archived entries must not appear in normal public search results.
- Admins and authorized editors can create and edit entries according to permissions.
- Reviewers can review and approve content according to their assigned permissions.
- Publishing actions must be enforced on the backend.
- Frontend route protection alone is not sufficient.
- Validate all status transitions on the backend.
- Record important content changes in revision history.
- Do not allow normal users to modify publication status.

---

# 11. Dictionary Search

Implement dictionary search as a separate feature.

Requirements:

- Search by dictionary pair.
- Exact match.
- Prefix match.
- Partial match where appropriate.
- Case-insensitive English matching.
- Pagination.
- Search result count.
- Loading state.
- Error state.
- Empty state.
- Validation for empty or excessively long queries.
- Reasonable query limits and maximum page sizes.
- Proper indexes for language, word, slug and other common filters.
- Unicode-safe handling for Sinhala, Pali, and Sanskrit text.

Do not assume that MySQL full-text search will automatically handle Sinhala correctly. Test tokenizer and collation behavior before selecting a full-text strategy.

Begin with indexed exact and prefix searches if that provides more predictable behavior.

Keep database queries efficient. Avoid N+1 queries and uncontrolled result loading.

Do not load every dictionary entry into the browser.

---

# 12. Advanced English–Sinhala Dictionary

Provide the data model and UI needed for a comprehensive English–Sinhala dictionary.

Features:

- English → Sinhala lookup
- Sinhala → English lookup
- Multiple context-sensitive meanings
- Parts of speech
- IPA pronunciation
- British and American variants where verified
- Audio playback where valid audio is available
- Plural forms and verb forms
- Synonyms
- Antonyms
- Phrasal verbs
- Idioms
- Collocations
- Example sentences and Sinhala translations
- Formal and informal usage
- Academic and professional usage labels
- Etymology only when supported by reliable sources

Do not fabricate data to make the UI appear complete.

When data is missing, display a clear unavailable state instead of inventing information.

---

# 13. Pronunciation

Create a reusable `PronunciationPlayer` component and separate pronunciation API services.

Support:

- IPA display
- Accent labels
- Play and pause controls where supported
- Loading and playback-error states
- Accessible button labels
- Audio attribution where required
- Audio licensing information where available

Do not invent MP3 URLs.

Only play a recording if a valid audio resource exists.

If browser speech synthesis is offered as a fallback, label it clearly as synthesized speech, not a verified human recording. Explain that voice and accent availability depend on the user's browser and operating system.

Keep pronunciation logic outside dictionary page components.

---

# 14. Authentication and Authorization

Implement secure authentication when proceeding with the authentication phase.

Roles may include:

- SUPER_ADMIN
- ADMIN
- EDITOR
- REVIEWER
- USER

Requirements:

- Secure password hashing with BCrypt or the supported Spring Security password encoder.
- JWT-based authentication.
- Server-side role enforcement.
- Validated request DTOs.
- Secure token handling.
- No plaintext passwords.
- No hardcoded JWT secret.
- No production secrets committed to Git.
- Appropriate authentication and authorization error responses.
- Login/logout handling.
- Appropriate token expiry and refresh strategy if refresh tokens are implemented.
- Protect admin endpoints using Spring Security.
- Prevent normal users from invoking admin functions.
- Do not trust a role value supplied by the frontend.

Prefer secure cookie-based token storage where appropriate for the deployment architecture. If bearer tokens are used, document their storage and XSS risk; do not store long-lived authentication tokens in localStorage by default.

Implement authentication only after inspecting the current project's security setup and identifying the safest compatible approach.

---

# 15. Admin Panel

Build a responsive Admin Panel with:

- Admin dashboard
- Language management
- Dictionary-pair management
- Dictionary-entry management
- Word-sense management
- Example sentence management
- Pronunciation management
- Word-form management
- Word-relationship management
- Source-reference management
- Review queue
- Publish/archive actions
- Revision history

Use reusable forms and components.

Forms must have:

- TypeScript types
- Client-side validation
- Server-side validation
- Field-level error messages
- Loading states
- Success and failure feedback
- Confirmation before destructive operations
- Accessible labels and keyboard support

Do not put all admin functionality in one giant component.

All administrative writes must be validated and authorized by the backend.

---

# 16. User Features

Plan and implement the following modules after the core dictionary works:

## Favorites

Authenticated users can:

- Save a dictionary entry.
- Remove a favorite.
- View their favorites.
- Avoid duplicate favorites.

## Vocabulary lists

Users can:

- Create a vocabulary list.
- Rename a list.
- Add or remove entries.
- View saved vocabulary.
- Prevent duplicate list items.

## Learning features

Plan:

- Flashcards
- Vocabulary review
- Basic quizzes
- Learning progress
- Saved words

Keep learning functionality separate from core dictionary search.

Do not implement these modules by adding unrelated logic to the home page.

---

# 17. Frontend Design Requirements

Use a professional, modern, accessible visual design.

Theme:

- Blue and white primary palette
- Clear typography
- Consistent spacing
- Responsive cards
- Rounded corners used consistently
- Subtle shadows
- Hover states
- Smooth transitions
- Professional icons using Lucide React
- Responsive navigation
- Mobile-friendly forms
- Accessible contrast

The home page must include:

- Brand header
- Main heading and description
- Dictionary search/filter
- Dictionary Pair cards loaded dynamically from the backend
- Responsive layout
- Footer
- Loading state
- Error state
- Empty state

Do not use a hardcoded list of dictionary pairs as the final data source.

A temporary skeleton may be used for loading.

Provide a clear retry action if the API request fails.

Do not display fake search results.

Use semantic HTML and accessibility attributes.

Support English and Sinhala UI labels through a maintainable translation strategy. Avoid scattering UI translations throughout unrelated components.

Do not add Bootstrap because Tailwind CSS is the selected styling framework.

---

# 18. API Client and Error Handling

Create a centralized API client.

Requirements:

- Base URL comes from `VITE_API_BASE_URL`.
- No duplicated hardcoded API URLs across components.
- Typed request and response models.
- Consistent error handling.
- Appropriate handling for network failures.
- Appropriate handling for non-2xx responses.
- No exposing sensitive backend details in the UI.
- Use AbortController or equivalent cancellation where appropriate.
- Avoid duplicate requests and stale state updates.
- Handle loading, error, empty, and success states separately.

Use API services for network operations and hooks for reusable React data/state behavior.

Keep presentation components focused on rendering and user interaction.

---

# 19. Backend Configuration and CORS

The backend port is 9090.

Set:

server.port=9090

Frontend development API URL:

VITE_API_BASE_URL=http://localhost:9090

Configure development CORS for the actual frontend origin.

If Vite uses port 5173, permit `http://localhost:5173` in local development.

Do not permit every origin in production.

If Spring Security is enabled, make sure CORS is integrated correctly with the security filter chain.

Keep environment-specific configuration separate.

Provide `.env.example` and appropriate backend configuration examples.

Never include real database passwords, JWT secrets, or production credentials in source control.

---

# 20. Database Migrations

Use Flyway for all database schema changes.

Requirements:

- Versioned migrations.
- Correct foreign keys.
- Unique constraints.
- Appropriate indexes.
- Consistent naming.
- UTF-8 support.
- Seed data for the four initial dictionary pairs.
- No destructive migration of existing user data.
- Do not edit previously applied migrations to make a later change.
- Use new migration files for new schema requirements.

Check the actual current schema before generating new migrations.

If a migration already exists, inspect it before creating a duplicate.

Ensure JPA entity mappings agree with the real MySQL schema.

---

# 21. Security and Data Integrity

Validate every request on the backend.

Requirements:

- Use Bean Validation annotations.
- Validate foreign-key references.
- Validate dictionary-pair configuration.
- Prevent duplicate entries where appropriate.
- Prevent invalid status transitions.
- Enforce authorization on sensitive operations.
- Use safe error messages.
- Prevent unauthorized data modification.
- Avoid leaking stack traces to public API responses.
- Use transaction boundaries for related writes.
- Avoid exposing internal entities directly.
- Configure production CORS restrictively.
- Do not commit secrets.
- Keep dependencies compatible and update only when justified.

Document any security limitation that cannot be completely addressed in the current phase.

---

# 22. Testing Requirements

Write meaningful tests rather than merely creating empty test files.

Frontend:

- Component rendering tests where the existing test setup supports them.
- API service tests.
- Loading state tests.
- Error state tests.
- Dictionary search/filter tests.
- Form validation tests.
- Routing tests.

Backend:

- Controller tests.
- Service tests.
- Repository tests.
- Validation tests.
- Error response tests.
- Authorization tests.
- Search tests.
- Publishing workflow tests.

Use the existing test framework if one is configured correctly.

Do not require a real production database for ordinary unit tests.

Use test-specific configuration or a suitable test database strategy for integration tests.

Test the following endpoints:

GET /api/health

GET /api/languages

GET /api/dictionary-pairs

Verify that all four initial pairs are present.

Test that only published dictionary entries appear in public endpoints when entry management is implemented.

---

# 23. Code Quality Rules

These requirements are mandatory:

1. Do not create a giant `App.tsx`.
2. Do not create giant React components that contain unrelated features.
3. Use arrow functions for application-level frontend functions and React components.
4. Use TypeScript interfaces or types for API models and component props.
5. Avoid `any` unless there is a justified technical reason.
6. Do not duplicate API request logic.
7. Do not put business logic inside presentation components.
8. Do not put SQL/database logic inside controllers.
9. Use service layers for business logic.
10. Use repositories for database access.
11. Use request and response DTOs.
12. Use consistent naming conventions.
13. Keep imports clean.
14. Avoid unused files, imports, and dependencies.
15. Do not create empty placeholder files merely to match a directory tree.
16. Avoid overengineering and unnecessary abstractions.
17. Do not change working code without a reason.
18. Do not silently ignore errors.
19. Do not fake success messages.
20. Do not use fabricated dictionary data.
21. Do not hardcode the four dictionary pairs in the frontend.
22. Do not hardcode port 8080 anywhere in the frontend.
23. The backend must use port 9090.
24. Do not expose database passwords or JWT secrets.
25. Keep each file responsible for one clear purpose wherever practical.

---

# 24. Required Development Workflow

Work directly in the existing project workspace.

Before editing:

1. Inspect the complete relevant project structure.
2. Read `package.json`, `vite.config.ts`, TypeScript configuration and frontend source.
3. Read `pom.xml`, `application.properties`, backend source and existing tests.
4. Inspect Flyway migrations and current database configuration.
5. Identify existing working functionality.
6. Identify incomplete or broken functionality.
7. Search for old backend port references, particularly port 8080.
8. Prepare a concise implementation plan.

Then implement incrementally.

Do not attempt to generate the entire project in a single uncontrolled change.

Complete one coherent phase at a time.

For every implementation phase:

1. Explain the objective.
2. List the files being created or changed.
3. Implement complete files, not incomplete snippets.
4. Keep related functionality in separate files.
5. Run available tests.
6. Run the frontend build.
7. Run the backend build.
8. Fix errors caused by your changes.
9. Summarize what works.
10. List remaining tasks honestly.

Do not claim tests passed unless they were actually run.

If you cannot run a command because a required dependency or database is unavailable, explain the limitation and provide the exact command the user should run.

Ask a question only when a missing decision materially blocks safe implementation. Otherwise, inspect the repository and make a reasonable, documented choice.

---

# 25. Implementation Phases

Implement the remaining project in the following order.

## Phase 1 — Audit and Foundation Verification

- Inspect existing files.
- Verify frontend dependencies.
- Verify Java 21 and Spring Boot configuration.
- Verify backend port 9090.
- Verify MySQL configuration.
- Verify Flyway migration setup.
- Verify language and dictionary-pair seed data.
- Verify health, languages and dictionary-pair endpoints.
- Verify the frontend dynamically loads dictionary pairs.
- Fix build and runtime issues without destroying working code.

## Phase 2 — Core Dictionary

- Dictionary entry entities.
- Word senses.
- Example sentences.
- Word forms.
- Sources and source references.
- Public entry APIs.
- Entry details page.
- Entry detail components.
- Validation and pagination.
- Flyway migrations.

## Phase 3 — Dictionary Search

- Pair-specific search.
- Exact and prefix matching.
- Unicode-safe handling.
- Search filters.
- Pagination.
- Search results components.
- Loading, empty and error states.
- Query validation.
- Performance and index checks.

## Phase 4 — Admin Panel

- Admin layout and routes.
- Language management.
- Dictionary-pair management.
- Entry CRUD.
- Meaning and example editors.
- Publication workflow.
- Review queue.
- Source references.
- Revision history.

## Phase 5 — Authentication and Security

- User and role management.
- Login.
- JWT security.
- Backend role enforcement.
- Protected admin APIs.
- Safe token handling.
- Security tests.

## Phase 6 — Advanced Dictionary

- Pronunciation data.
- Audio player.
- IPA display.
- Word forms.
- Synonyms and antonyms.
- Related words.
- Cross-language translations.
- Phrasal verbs and idioms where the data model supports them.
- Usage labels and source attribution.

## Phase 7 — User Learning Features

- Favorites.
- Vocabulary lists.
- Flashcards.
- Vocabulary review.
- Basic quizzes.
- Progress tracking.

## Phase 8 — Final QA and Deployment Readiness

- Responsive UI testing.
- Accessibility review.
- Backend and frontend build checks.
- Security review.
- API documentation.
- Environment configuration.
- Production CORS.
- Database backups and migration checks.
- HTTPS and deployment documentation.

---

# 26. Expected First Result

Start with **Phase 1 — Audit and Foundation Verification**.

Do not immediately begin Phase 2 until Phase 1 has been verified.

At the end of Phase 1, provide:

1. An audit of the existing project.
2. A list of working features.
3. A list of missing or broken features.
4. A list of files created or modified.
5. The complete code for any files that needed changes.
6. Confirmation that the backend is configured for port 9090.
7. Confirmation of the frontend API base URL.
8. Database migration verification.
9. Build and test results.
10. Exact local run instructions.
11. A concise list of remaining work.

If the project workspace is accessible, edit the actual files rather than only describing the changes.

If the project workspace is not accessible, explain that limitation and provide complete, correctly organized files for the next implementation phase.

**Final instruction:** Prioritize correctness, maintainability, security, file separation, component architecture, function architecture, and a scalable language-independent dictionary design. Continue from the actual project state rather than assuming any feature is already completed or missing without inspection.