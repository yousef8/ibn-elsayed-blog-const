import type { I18nStrings } from "./types";
import ARLocale from "./locales/ar";
import ENLocale from "./locales/en";

export type LocaleProfile = {
  name: string;
  messages: I18nStrings;
  langTag: string;
  direction: "rtl" | "ltr" | "auto";
  default?: boolean;
};

export type SupportedLocales = Array<keyof typeof localeToProfile>;

export const localeToProfile = {
  en: {
    name: "English", // Name presented in language picker
    messages: ENLocale,
    langTag: "en-US", // Extremly important used in localizing dates, numbers and sitemap,  only English alphabet and hyphen allowed
    direction: "ltr",
    default: true,
  },
  ar: {
    name: "العربية",
    messages: ARLocale,
    langTag: "ar-EG",
    direction: "rtl",
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
