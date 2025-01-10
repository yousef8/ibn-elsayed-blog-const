import {
  type LocaleProfile,
  type SupportedLocales,
  DEFAULT_LOCALE,
  localeToProfile,
  SUPPORTED_LOCALES,
} from "./locales";
import type { I18nKeys } from "./types";

export function translateFor(locale: string | undefined) {
  locale = locale ?? DEFAULT_LOCALE;
  return (key: I18nKeys, substitutions?: Record<string, string | number>) => {
    let translation =
      localeToProfile[locale as SupportedLocales[number]].messages[key];

    for (const key in substitutions) {
      const value = substitutions[key];
      translation = translation.replace(`{${key}}`, String(value));
    }

    return translation;
  };
}

export function getLocaleInfo(locale: string | undefined): LocaleProfile {
  if (locale && SUPPORTED_LOCALES.includes(locale as SupportedLocales[number]))
    return localeToProfile[locale as SupportedLocales[number]];

  return localeToProfile[DEFAULT_LOCALE];
}
