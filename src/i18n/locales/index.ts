import type { I18nStrings } from "../types";
import englishLocale from "./en";

export const localeToTranslations: Record<string, I18nStrings> = {
  en: englishLocale,
};

export type supportedLocales = keyof typeof localeToTranslations;
