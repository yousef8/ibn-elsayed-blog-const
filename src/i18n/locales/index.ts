import type { I18nStrings } from "../types";
import { ARLocale } from "./ar";
import englishLocale from "./en";

export const localeToTranslations: Record<string, I18nStrings> = {
  en: englishLocale,
  ar: ARLocale,
};

export type supportedLocales = keyof typeof localeToTranslations;
