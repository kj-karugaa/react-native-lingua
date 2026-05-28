export type LanguageCode = "es" | "fr" | "ja" | "pt" | "ko" | "de" | "zh";

export type ActivityType = "vocabulary" | "phrase" | "quiz" | "ai-teacher";

export interface Language {
  id: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  learnerCount?: string;
  description: string;
  totalUnits: number;
}

export interface VocabItem {
  word: string;
  translation: string;
  pronunciation?: string;
  example?: string;
}

export interface PhraseItem {
  phrase: string;
  translation: string;
  pronunciation?: string;
}

export interface QuizOption {
  id: string;
  text: string;
  correct: boolean;
}

export interface VocabActivity {
  type: "vocabulary";
  vocab: VocabItem;
}

export interface PhraseActivity {
  type: "phrase";
  phrase: PhraseItem;
}

export interface QuizActivity {
  type: "quiz";
  question: string;
  options: QuizOption[];
}

export interface AITeacherActivity {
  type: "ai-teacher";
  topic: string;
  prompt: string;
}

export type Activity =
  | VocabActivity
  | PhraseActivity
  | QuizActivity
  | AITeacherActivity;

export interface Lesson {
  id: string;
  unitId: string;
  languageId: LanguageCode;
  title: string;
  description: string;
  xpReward: number;
  image?: string;
  goals: string[];
  activities: Activity[];
  aiTeacherPrompt: string;
}

export interface Unit {
  id: string;
  languageId: LanguageCode;
  title: string;
  description: string;
  order: number;
  lessonIds: string[];
}
