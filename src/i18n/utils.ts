import type { I18nKeys } from "./types";
import { type supportedLocales, localeToTranslations } from "./locales";

export function translateFor(locale: supportedLocales) {
  return (key: I18nKeys, substitutions?: Record<string, string | number>) => {
    let translation = localeToTranslations[locale][key];

    for (const key in substitutions) {
      const value = substitutions[key];
      translation = translation.replace(`{${key}}`, String(value));
    }

    return translation;
  };
}
