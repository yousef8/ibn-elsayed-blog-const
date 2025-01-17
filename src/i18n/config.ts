import type { I18nStrings } from "./types";
import { ARLocale } from "./locales/ar";
import ENLocale from "./locales/en";

export type LocaleProfile = {
  messages: I18nStrings;
  langTag: string; // Extremly important used in localizing dates, numbers and sitemap,  only English alphabet and hyphen allowed
  direction: "rtl" | "ltr" | "auto";
  default?: boolean;
};

export type SupportedLocales = Array<keyof typeof localeToProfile>;

export const localeToProfile = {
  ar: { messages: ARLocale, langTag: "ar-EG", direction: "rtl" },
  en: {
    messages: ENLocale,
    langTag: "en-US",
    direction: "ltr",
    default: true,
  },
} satisfies Record<string, LocaleProfile>;

export const SUPPORTED_LOCALES = Object.keys(
  localeToProfile
) as SupportedLocales;

export const DEFAULT_LOCALE =
  SUPPORTED_LOCALES.find(
    key => (localeToProfile[key] as LocaleProfile)?.default === true
  ) ?? SUPPORTED_LOCALES[0];

export const LOCALES_TO_LANG = Object.fromEntries(
  // For Sitemap
  Object.entries(localeToProfile).map(([locale, profile]) => [
    locale,
    profile.langTag,
  ])
) as Record<keyof typeof localeToProfile, string>;
