import type { Unit } from "@/types/learning";

export const units: Unit[] = [
  {
    id: "es-unit-1",
    languageId: "es",
    title: "Básicos 1",
    description: "Greetings, numbers, colors, and everyday essentials",
    order: 1,
    lessonIds: [
      "es-unit1-lesson1",
      "es-unit1-lesson2",
      "es-unit1-lesson3",
      "es-unit1-lesson4",
      "es-unit1-lesson5",
      "es-unit1-lesson6",
    ],
  },
  {
    id: "fr-unit-1",
    languageId: "fr",
    title: "Les Bases",
    description: "Greetings, numbers, colors, and everyday essentials",
    order: 1,
    lessonIds: [
      "fr-unit1-lesson1",
      "fr-unit1-lesson2",
      "fr-unit1-lesson3",
      "fr-unit1-lesson4",
      "fr-unit1-lesson5",
      "fr-unit1-lesson6",
    ],
  },
  {
    id: "ja-unit-1",
    languageId: "ja",
    title: "はじめに",
    description: "First steps — greetings, numbers, colors, and daily life",
    order: 1,
    lessonIds: [
      "ja-unit1-lesson1",
      "ja-unit1-lesson2",
      "ja-unit1-lesson3",
      "ja-unit1-lesson4",
      "ja-unit1-lesson5",
      "ja-unit1-lesson6",
    ],
  },
  {
    id: "pt-unit-1",
    languageId: "pt",
    title: "Básico 1",
    description: "Greetings, numbers, colors, and everyday essentials",
    order: 1,
    lessonIds: [
      "pt-unit1-lesson1",
      "pt-unit1-lesson2",
      "pt-unit1-lesson3",
      "pt-unit1-lesson4",
      "pt-unit1-lesson5",
      "pt-unit1-lesson6",
    ],
  },
];

export function getUnitsByLanguage(languageId: string) {
  return units.filter((unit) => unit.languageId === languageId);
}

export function getUnitById(id: string) {
  return units.find((unit) => unit.id === id);
}
