import type { I18nStrings } from "../types";
import { ARLocale } from "./ar";
import ENLocale from "./en";

export type LocaleProfile = {
  messages: I18nStrings;
  langTag: string;
  direction: "rtl" | "ltr" | "auto";
  default?: boolean;
};

export type SupportedLocales = Array<keyof typeof localeToProfile>;

export const localeToProfile = {
  ar: { messages: ARLocale, langTag: "ar", direction: "rtl" },
  en: {
    messages: ENLocale,
    langTag: "en-US",
    direction: "ltr",
  },
} satisfies Record<string, LocaleProfile>;

export const SUPPORTED_LOCALES = Object.keys(
  localeToProfile
) as SupportedLocales;

export const DEFAULT_LOCALE =
  SUPPORTED_LOCALES.find(
    key => (localeToProfile[key] as LocaleProfile)?.default === true
  ) ?? SUPPORTED_LOCALES[0];
