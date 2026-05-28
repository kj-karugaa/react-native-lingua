import type { Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  // ─── Spanish Unit 1 ───────────────────────────────────────────────────────

  {
    id: "es-unit1-lesson1",
    unitId: "es-unit-1",
    languageId: "es",
    title: "Greetings",
    description: "Say hello and goodbye in Spanish",
    xpReward: 10,
    goals: [
      "Say hello and goodbye",
      "Introduce yourself",
      "Ask how someone is doing",
    ],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "Hola",
          translation: "Hello",
          pronunciation: "OH-lah",
          example: "Hola, ¿cómo estás?",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "Adiós",
          translation: "Goodbye",
          pronunciation: "ah-dee-OHS",
          example: "Adiós, hasta luego.",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "¿Cómo te llamas?",
          translation: "What is your name?",
          pronunciation: "KOH-moh teh YAH-mahs",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "Me llamo...",
          translation: "My name is...",
          pronunciation: "meh YAH-moh",
        },
      },
      {
        type: "quiz",
        question: "How do you say 'Hello' in Spanish?",
        options: [
          { id: "a", text: "Adiós", correct: false },
          { id: "b", text: "Hola", correct: true },
          { id: "c", text: "Gracias", correct: false },
          { id: "d", text: "Por favor", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "Spanish Greetings",
        prompt:
          "Teach the student common Spanish greetings. Cover 'Hola', 'Buenos días', 'Buenas tardes', 'Buenas noches', and 'Adiós'. Use friendly, encouraging language. Give one example sentence for each greeting and ask the student to repeat after you. Keep the session under 3 minutes.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Spanish teacher. Your student is an absolute beginner. Teach greetings in Spanish using simple English explanations. Be warm, encouraging, and patient. Speak slowly and clearly. Celebrate small wins.",
  },

  {
    id: "es-unit1-lesson2",
    unitId: "es-unit-1",
    languageId: "es",
    title: "Numbers 1–5",
    description: "Count from one to five in Spanish",
    xpReward: 10,
    goals: ["Count from 1 to 5 in Spanish", "Use numbers in simple sentences"],
    activities: [
      {
        type: "vocabulary",
        vocab: { word: "uno", translation: "one", pronunciation: "OO-noh" },
      },
      {
        type: "vocabulary",
        vocab: { word: "dos", translation: "two", pronunciation: "dohs" },
      },
      {
        type: "vocabulary",
        vocab: { word: "tres", translation: "three", pronunciation: "trehs" },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "cuatro",
          translation: "four",
          pronunciation: "KWAH-troh",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "cinco",
          translation: "five",
          pronunciation: "SEEN-koh",
        },
      },
      {
        type: "quiz",
        question: "What does 'tres' mean?",
        options: [
          { id: "a", text: "one", correct: false },
          { id: "b", text: "two", correct: false },
          { id: "c", text: "three", correct: true },
          { id: "d", text: "four", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "Spanish Numbers 1–5",
        prompt:
          "Teach the student to count from 1 to 5 in Spanish. Say each number clearly, have the student repeat, then count together. End with a quick quiz — say a number in English and ask the student to say it in Spanish.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Spanish teacher teaching numbers 1 to 5. Keep it fun and interactive. Use simple repetition exercises. The student is a complete beginner.",
  },

  {
    id: "es-unit1-lesson3",
    unitId: "es-unit-1",
    languageId: "es",
    title: "Colors",
    description: "Learn basic colors in Spanish",
    xpReward: 10,
    goals: ["Name 5 common colors in Spanish", "Describe objects using colors"],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "rojo",
          translation: "red",
          pronunciation: "ROH-hoh",
          example: "El tomate es rojo.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "azul",
          translation: "blue",
          pronunciation: "ah-SOOL",
          example: "El cielo es azul.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "verde",
          translation: "green",
          pronunciation: "BEHR-deh",
          example: "La manzana es verde.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "amarillo",
          translation: "yellow",
          pronunciation: "ah-mah-REE-yoh",
          example: "El sol es amarillo.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "blanco",
          translation: "white",
          pronunciation: "BLAHN-koh",
          example: "La nieve es blanca.",
        },
      },
      {
        type: "quiz",
        question: "How do you say 'blue' in Spanish?",
        options: [
          { id: "a", text: "rojo", correct: false },
          { id: "b", text: "verde", correct: false },
          { id: "c", text: "azul", correct: true },
          { id: "d", text: "amarillo", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "Spanish Colors",
        prompt:
          "Teach the student 5 basic colors in Spanish: rojo, azul, verde, amarillo, blanco. For each color, say it in Spanish, give the English meaning, and use a simple object example (e.g. 'El tomate es rojo — the tomato is red'). Then quiz the student by describing an object and asking which color it is.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Spanish teacher. Teach basic colors using vivid object examples. Keep it light and visual. Encourage the student to associate colors with objects they know.",
  },

  // ─── French Unit 1 ────────────────────────────────────────────────────────

  {
    id: "fr-unit1-lesson1",
    unitId: "fr-unit-1",
    languageId: "fr",
    title: "Greetings",
    description: "Say hello and goodbye in French",
    xpReward: 10,
    goals: [
      "Say hello and goodbye",
      "Introduce yourself",
      "Ask how someone is doing",
    ],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "Bonjour",
          translation: "Hello / Good day",
          pronunciation: "bohn-ZHOOR",
          example: "Bonjour, comment vous appelez-vous?",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "Au revoir",
          translation: "Goodbye",
          pronunciation: "oh ruh-VWAR",
          example: "Au revoir, à bientôt!",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "Comment vous appelez-vous?",
          translation: "What is your name? (formal)",
          pronunciation: "koh-MAHN voo zah-play-VOO",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "Je m'appelle...",
          translation: "My name is...",
          pronunciation: "zhuh mah-PELL",
        },
      },
      {
        type: "quiz",
        question: "How do you say 'Goodbye' in French?",
        options: [
          { id: "a", text: "Bonjour", correct: false },
          { id: "b", text: "Merci", correct: false },
          { id: "c", text: "Au revoir", correct: true },
          { id: "d", text: "S'il vous plaît", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "French Greetings",
        prompt:
          "Teach the student common French greetings. Cover 'Bonjour', 'Bonsoir', 'Salut', and 'Au revoir'. Explain when each is used (formal vs informal). Give one example sentence per greeting. Ask the student to repeat each phrase. Keep it under 3 minutes.",
      },
    ],
    aiTeacherPrompt:
      "You are a warm and encouraging French teacher. Your student is a complete beginner. Teach greetings with clear English explanations. Pay attention to French pronunciation tips. Make it fun.",
  },

  {
    id: "fr-unit1-lesson2",
    unitId: "fr-unit-1",
    languageId: "fr",
    title: "Numbers 1–5",
    description: "Count from one to five in French",
    xpReward: 10,
    goals: ["Count from 1 to 5 in French", "Use numbers in simple sentences"],
    activities: [
      {
        type: "vocabulary",
        vocab: { word: "un", translation: "one", pronunciation: "uhn" },
      },
      {
        type: "vocabulary",
        vocab: { word: "deux", translation: "two", pronunciation: "duh" },
      },
      {
        type: "vocabulary",
        vocab: { word: "trois", translation: "three", pronunciation: "twah" },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "quatre",
          translation: "four",
          pronunciation: "KAH-truh",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "cinq",
          translation: "five",
          pronunciation: "sank",
        },
      },
      {
        type: "quiz",
        question: "What does 'deux' mean?",
        options: [
          { id: "a", text: "one", correct: false },
          { id: "b", text: "two", correct: true },
          { id: "c", text: "three", correct: false },
          { id: "d", text: "five", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "French Numbers 1–5",
        prompt:
          "Teach the student to count from 1 to 5 in French: un, deux, trois, quatre, cinq. Pronounce each number slowly and ask the student to repeat. Count together, then do a quick quiz — say a number in English, ask the student to say it in French.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly French teacher teaching numbers 1 to 5. Use simple repetition, counting games, and gentle encouragement. The student is a total beginner.",
  },

  // ─── Japanese Unit 1 ──────────────────────────────────────────────────────

  {
    id: "ja-unit1-lesson1",
    unitId: "ja-unit-1",
    languageId: "ja",
    title: "Greetings",
    description: "Say hello and thank you in Japanese",
    xpReward: 10,
    goals: [
      "Say hello at different times of day",
      "Say thank you and you're welcome",
      "Say goodbye",
    ],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "こんにちは",
          translation: "Hello / Good afternoon",
          pronunciation: "kon-ni-chi-WA",
          example: "こんにちは、はじめまして。",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "おはようございます",
          translation: "Good morning (formal)",
          pronunciation: "o-ha-yo go-ZAI-mas",
          example: "おはようございます、先生。",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "ありがとう",
          translation: "Thank you",
          pronunciation: "a-ri-GA-to",
          example: "ありがとうございます。",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "はじめまして",
          translation: "Nice to meet you",
          pronunciation: "ha-ji-me-MA-shi-te",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "さようなら",
          translation: "Goodbye (formal)",
          pronunciation: "sa-yo-NA-ra",
        },
      },
      {
        type: "quiz",
        question: "How do you say 'Thank you' in Japanese?",
        options: [
          { id: "a", text: "こんにちは", correct: false },
          { id: "b", text: "さようなら", correct: false },
          { id: "c", text: "ありがとう", correct: true },
          { id: "d", text: "おはよう", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "Japanese Greetings",
        prompt:
          "Teach the student basic Japanese greetings. Cover おはようございます (morning), こんにちは (afternoon), こんばんは (evening), ありがとう (thank you), and さようなら (goodbye). Explain pronunciation carefully using romaji. Keep explanations in English. Ask the student to repeat each phrase. Be encouraging and patient.",
      },
    ],
    aiTeacherPrompt:
      "You are a kind and patient Japanese teacher. Your student is a complete beginner with no prior knowledge of Japanese. Use romaji pronunciation guides alongside the Japanese script. Keep explanations in English. Focus on making the student feel confident.",
  },

  {
    id: "ja-unit1-lesson2",
    unitId: "ja-unit-1",
    languageId: "ja",
    title: "Numbers 1–5",
    description: "Count from one to five in Japanese",
    xpReward: 10,
    goals: ["Count from 1 to 5 in Japanese", "Learn two counting systems"],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "いち",
          translation: "one",
          pronunciation: "i-chi",
        },
      },
      {
        type: "vocabulary",
        vocab: { word: "に", translation: "two", pronunciation: "ni" },
      },
      {
        type: "vocabulary",
        vocab: { word: "さん", translation: "three", pronunciation: "san" },
      },
      {
        type: "vocabulary",
        vocab: { word: "し / よん", translation: "four", pronunciation: "shi / yon" },
      },
      {
        type: "vocabulary",
        vocab: { word: "ご", translation: "five", pronunciation: "go" },
      },
      {
        type: "quiz",
        question: "How do you say 'three' in Japanese?",
        options: [
          { id: "a", text: "いち", correct: false },
          { id: "b", text: "に", correct: false },
          { id: "c", text: "さん", correct: true },
          { id: "d", text: "ご", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "Japanese Numbers 1–5",
        prompt:
          "Teach the student to count from 1 to 5 in Japanese: いち, に, さん, し/よん, ご. Use romaji alongside hiragana. Mention that 4 has two readings (shi and yon) and explain that yon is often preferred. Count together slowly. End with a short quiz.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Japanese teacher. Teach numbers 1–5 with clear romaji pronunciation. Mention interesting cultural notes where relevant (e.g. the significance of certain numbers). Keep it beginner-friendly and fun.",
  },

  // ─── Portuguese Unit 1 ────────────────────────────────────────────────────

  {
    id: "pt-unit1-lesson1",
    unitId: "pt-unit-1",
    languageId: "pt",
    title: "Greetings",
    description: "Say hello and goodbye in Portuguese",
    xpReward: 10,
    goals: [
      "Say hello and goodbye",
      "Introduce yourself",
      "Ask how someone is doing",
    ],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "Olá",
          translation: "Hello",
          pronunciation: "oh-LAH",
          example: "Olá, tudo bem?",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "Tchau",
          translation: "Bye",
          pronunciation: "chow",
          example: "Tchau, até logo!",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "Como você se chama?",
          translation: "What is your name?",
          pronunciation: "KOH-moo voh-SAY see SHA-mah",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "Meu nome é...",
          translation: "My name is...",
          pronunciation: "MEH-oo NOH-meh eh",
        },
      },
      {
        type: "quiz",
        question: "How do you say 'Hello' in Portuguese?",
        options: [
          { id: "a", text: "Tchau", correct: false },
          { id: "b", text: "Obrigado", correct: false },
          { id: "c", text: "Olá", correct: true },
          { id: "d", text: "Por favor", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "Portuguese Greetings",
        prompt:
          "Teach the student common Brazilian Portuguese greetings. Cover 'Olá', 'Bom dia', 'Boa tarde', 'Boa noite', and 'Tchau'. Give one example sentence for each and ask the student to repeat. Mention that Brazilian and European Portuguese differ slightly. Keep it under 3 minutes.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Brazilian Portuguese teacher. Your student is a complete beginner. Teach greetings with clear English explanations. Focus on Brazilian Portuguese pronunciation. Be warm and encouraging.",
  },

  {
    id: "pt-unit1-lesson2",
    unitId: "pt-unit-1",
    languageId: "pt",
    title: "Numbers 1–5",
    description: "Count from one to five in Portuguese",
    xpReward: 10,
    goals: ["Count from 1 to 5 in Portuguese", "Use numbers in simple sentences"],
    activities: [
      {
        type: "vocabulary",
        vocab: { word: "um", translation: "one", pronunciation: "oom" },
      },
      {
        type: "vocabulary",
        vocab: { word: "dois", translation: "two", pronunciation: "doysh" },
      },
      {
        type: "vocabulary",
        vocab: { word: "três", translation: "three", pronunciation: "traysh" },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "quatro",
          translation: "four",
          pronunciation: "KWAH-troo",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "cinco",
          translation: "five",
          pronunciation: "SEEN-koo",
        },
      },
      {
        type: "quiz",
        question: "What does 'dois' mean?",
        options: [
          { id: "a", text: "one", correct: false },
          { id: "b", text: "two", correct: true },
          { id: "c", text: "three", correct: false },
          { id: "d", text: "five", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "Portuguese Numbers 1–5",
        prompt:
          "Teach the student to count from 1 to 5 in Brazilian Portuguese: um, dois, três, quatro, cinco. Pronounce each number clearly and ask the student to repeat. Count together, then quiz the student — say a number in English and ask them to say it in Portuguese.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Brazilian Portuguese teacher teaching numbers 1 to 5. Use simple repetition and gentle encouragement. The student is a total beginner.",
  },
];

export function getLessonsByUnit(unitId: string) {
  return lessons.filter((lesson) => lesson.unitId === unitId);
}

export function getLessonById(id: string) {
  return lessons.find((lesson) => lesson.id === id);
}

export function getLessonsByLanguage(languageId: string) {
  return lessons.filter((lesson) => lesson.languageId === languageId);
}
