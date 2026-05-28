import type { Language } from "@/types/learning";

export const languages: Language[] = [
  {
    id: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "https://flagcdn.com/w80/es.png",
    learnerCount: "28.4M",
    description: "Spoken by 500M+ people across the world",
    totalUnits: 1,
  },
  {
    id: "fr",
    name: "French",
    nativeName: "Français",
    flag: "https://flagcdn.com/w80/fr.png",
    learnerCount: "19.4M",
    description: "The language of love, culture, and diplomacy",
    totalUnits: 1,
  },
  {
    id: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "https://flagcdn.com/w80/jp.png",
    learnerCount: "12.7M",
    description: "A fascinating language with unique writing systems",
    totalUnits: 1,
  },
  {
    id: "ko",
    name: "Korean",
    nativeName: "한국어",
    flag: "https://flagcdn.com/w80/kr.png",
    learnerCount: "9.3M",
    description: "The language of K-pop, dramas, and innovation",
    totalUnits: 1,
  },
  {
    id: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "https://flagcdn.com/w80/de.png",
    learnerCount: "8.1M",
    description: "The language of philosophy, engineering, and culture",
    totalUnits: 1,
  },
  {
    id: "zh",
    name: "Chinese",
    nativeName: "中文",
    flag: "https://flagcdn.com/w80/cn.png",
    learnerCount: "7.4M",
    description: "The most spoken language in the world",
    totalUnits: 1,
  },
  {
    id: "pt",
    name: "Portuguese",
    nativeName: "Português",
    flag: "https://flagcdn.com/w80/br.png",
    learnerCount: "5.1M",
    description: "Spoken by 260M+ people across Brazil and Portugal",
    totalUnits: 1,
  },
];

export function getLanguageById(id: string) {
  return languages.find((lang) => lang.id === id);
}
