import { type GetLocaleOptions, getRelativeLocaleUrl } from "astro:i18n";
import {
  type LocaleProfile,
  type SupportedLocales,
  DEFAULT_LOCALE,
  localeToProfile,
  SUPPORTED_LOCALES,
} from "./config";
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

function isLocaleKey(locale: string): locale is SupportedLocales[number] {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocales[number]);
}

export function isValidLocaleKey(locale: string): boolean {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocales[number]);
}

export function getLocaleInfo(locale?: string): LocaleProfile {
  return locale && isLocaleKey(locale)
    ? localeToProfile[locale]
    : localeToProfile[DEFAULT_LOCALE];
}

export function isPathLocalized(path: string): boolean {
  const possibleLocalKeyInPath = path.split("/").splice(1)[0];
  return isValidLocaleKey(possibleLocalKeyInPath);
}

export function getRelativeLocalePath(
  locale: string | undefined,
  path?: string,
  options?: GetLocaleOptions
): string {
  if (!locale) {
    throw new Error("locale key is undefined");
  }

  if (!isLocaleKey(locale))
    throw new Error(
      `'${locale}' locale is not supported, add it to i18n/config or choose a supported locale`
    );

  return getRelativeLocaleUrl(locale, path, options);
}
