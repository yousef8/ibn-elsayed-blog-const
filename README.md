# AstroPaper with I18n

- This repository is a fork of the [AstroPaper](https://github.com/satnaing/astro-paper) theme, enhanced to support internationalization (i18n).

- I18n integration is implemented using [Astorjs i18n routing](https://docs.astro.build/en/guides/internationalization/)

- As I'm a native Arabic speaker, I made sure the i18n integration supports RTL languages (etc Arabic, Persian,...).

- If god wills, the branch will maintain synchronization with the original [AstroPaper](https://github.com/satnaing/astro-paper) theme.

- Does not modify the original theme’s UI; it solely adds i18n support.

## 🔥 Features

This project includes all the features of the original [AstroPaper](https://github.com/satnaing/astro-paper) theme, with the following enhancements:

### UI Enhancements

- [x] **Direction Agnostic:**
  - [x] Full RTL support.
  - [x] Consistent UI for both `LTR` and `RTL` directions.

### i18n Features

- [x] UI translations, including numbers and dates.
- [x] Language switcher.
- [x] Accessibility-related translations.
- [x] Type-safe i18n integration using TypeScript.
- [x] Sitemaps with i18n support ([`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/)).
- [ ] 📋 **Planned:**
  - [ ] RSS Feeds with i18n support ([`@astrojs/rss`](https://docs.astro.build/en/guides/rss/)).
    - Currently, subscribing to RSS applies to all languages.
  - [ ] Route translations.

### 🧪 Testing (📋 Planned)

- [ ] Ensure locales are properly configured.
- [ ] Verify successful rendering of all pages.
- [ ] Validate that every locale uses a `langTag` compliant with BCP47 standards (e.g., English alphabet and hyphen).

## 🚧 Known Issues

- [ ] Styling in screen reader mode is currently broken and requires fixes.
  - Contributions are welcome!
