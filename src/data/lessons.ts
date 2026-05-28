import type { Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  // ─── Spanish Unit 1 ───────────────────────────────────────────────────────

  {
    id: "es-unit1-lesson1",
    unitId: "es-unit-1",
    languageId: "es",
    title: "Greetings & Introductions",
    description: "Say hello and introduce yourself in Spanish",
    xpReward: 10,
    image: "https://picsum.photos/seed/es-greet/300/300",
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
    image: "https://picsum.photos/seed/es-numbers/300/300",
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
    image: "https://picsum.photos/seed/es-colors/300/300",
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
          "Teach the student 5 basic colors in Spanish: rojo, azul, verde, amarillo, blanco. For each color, say it in Spanish, give the English meaning, and use a simple object example. Then quiz the student by describing an object and asking which color it is.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Spanish teacher. Teach basic colors using vivid object examples. Keep it light and visual. Encourage the student to associate colors with objects they know.",
  },

  {
    id: "es-unit1-lesson4",
    unitId: "es-unit-1",
    languageId: "es",
    title: "Daily Life",
    description: "Talk about your everyday routine in Spanish",
    xpReward: 10,
    image: "https://picsum.photos/seed/es-daily/300/300",
    goals: ["Describe daily activities", "Use common action verbs", "Talk about your schedule"],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "desayunar",
          translation: "to have breakfast",
          pronunciation: "deh-sah-yoo-NAR",
          example: "Yo desayuno a las ocho.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "trabajar",
          translation: "to work",
          pronunciation: "trah-bah-HAR",
          example: "Ella trabaja en una oficina.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "dormir",
          translation: "to sleep",
          pronunciation: "dor-MEER",
          example: "Duermo ocho horas.",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "¿A qué hora te despiertas?",
          translation: "What time do you wake up?",
          pronunciation: "ah keh OH-rah teh des-pee-EHR-tahs",
        },
      },
      {
        type: "quiz",
        question: "What does 'dormir' mean?",
        options: [
          { id: "a", text: "to eat", correct: false },
          { id: "b", text: "to work", correct: false },
          { id: "c", text: "to sleep", correct: true },
          { id: "d", text: "to walk", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "Spanish Daily Routine",
        prompt:
          "Teach the student how to describe their daily routine in Spanish. Cover verbs like desayunar, trabajar, estudiar, dormir. Help them build a simple sentence describing their morning routine. Keep it conversational and fun.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Spanish teacher. Guide the student through describing their daily routine using simple verbs and time expressions. Encourage them to make their own sentences about their day.",
  },

  {
    id: "es-unit1-lesson5",
    unitId: "es-unit-1",
    languageId: "es",
    title: "Food & Drink",
    description: "Order food and talk about meals in Spanish",
    xpReward: 10,
    image: "https://picsum.photos/seed/es-food/300/300",
    goals: ["Name common foods in Spanish", "Order at a restaurant", "Express preferences"],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "agua",
          translation: "water",
          pronunciation: "AH-gwah",
          example: "Un vaso de agua, por favor.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "pan",
          translation: "bread",
          pronunciation: "pahn",
          example: "Me gusta el pan.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "café",
          translation: "coffee",
          pronunciation: "kah-FEH",
          example: "Quiero un café, por favor.",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "La cuenta, por favor.",
          translation: "The bill, please.",
          pronunciation: "lah KWEHN-tah por fah-VOR",
        },
      },
      {
        type: "quiz",
        question: "How do you say 'water' in Spanish?",
        options: [
          { id: "a", text: "pan", correct: false },
          { id: "b", text: "leche", correct: false },
          { id: "c", text: "agua", correct: true },
          { id: "d", text: "café", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "Spanish Food & Ordering",
        prompt:
          "Teach the student how to order food and drink at a Spanish restaurant. Cover common food vocabulary and polite phrases for ordering. Role-play a simple restaurant scenario where the student orders a meal.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Spanish teacher. Teach the student how to order food in a restaurant setting. Make it interactive with a role-play scenario. Use encouragement and keep it practical.",
  },

  {
    id: "es-unit1-lesson6",
    unitId: "es-unit-1",
    languageId: "es",
    title: "Travel & Directions",
    description: "Ask for and give directions in Spanish",
    xpReward: 10,
    image: "https://picsum.photos/seed/es-travel/300/300",
    goals: ["Ask for directions", "Understand basic location words", "Name transportation types"],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "izquierda",
          translation: "left",
          pronunciation: "ees-KYEHR-dah",
          example: "Gira a la izquierda.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "derecha",
          translation: "right",
          pronunciation: "deh-REH-chah",
          example: "Sigue a la derecha.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "el aeropuerto",
          translation: "the airport",
          pronunciation: "el ah-eh-roh-PWEHR-toh",
          example: "¿Dónde está el aeropuerto?",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "¿Dónde está...?",
          translation: "Where is...?",
          pronunciation: "DOHN-deh es-TAH",
        },
      },
      {
        type: "quiz",
        question: "How do you say 'left' in Spanish?",
        options: [
          { id: "a", text: "derecha", correct: false },
          { id: "b", text: "izquierda", correct: true },
          { id: "c", text: "recto", correct: false },
          { id: "d", text: "aquí", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "Spanish Directions",
        prompt:
          "Teach the student how to ask for and give directions in Spanish. Cover izquierda, derecha, recto, and key location words. Role-play a scenario where the student asks how to get to the train station.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Spanish travel guide teaching directions. Use a city map scenario to make directions feel real and practical. Celebrate when the student gets it right.",
  },

  // ─── French Unit 1 ────────────────────────────────────────────────────────

  {
    id: "fr-unit1-lesson1",
    unitId: "fr-unit-1",
    languageId: "fr",
    title: "Greetings & Introductions",
    description: "Say hello and introduce yourself in French",
    xpReward: 10,
    image: "https://picsum.photos/seed/fr-greet/300/300",
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
    image: "https://picsum.photos/seed/fr-numbers/300/300",
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

  {
    id: "fr-unit1-lesson3",
    unitId: "fr-unit-1",
    languageId: "fr",
    title: "Colors",
    description: "Learn basic colors in French",
    xpReward: 10,
    image: "https://picsum.photos/seed/fr-colors/300/300",
    goals: ["Name 5 common colors in French", "Describe objects using colors"],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "rouge",
          translation: "red",
          pronunciation: "roozh",
          example: "La rose est rouge.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "bleu",
          translation: "blue",
          pronunciation: "bluh",
          example: "Le ciel est bleu.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "vert",
          translation: "green",
          pronunciation: "vehr",
          example: "L'herbe est verte.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "jaune",
          translation: "yellow",
          pronunciation: "zhohn",
          example: "Le soleil est jaune.",
        },
      },
      {
        type: "quiz",
        question: "How do you say 'red' in French?",
        options: [
          { id: "a", text: "bleu", correct: false },
          { id: "b", text: "vert", correct: false },
          { id: "c", text: "rouge", correct: true },
          { id: "d", text: "jaune", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "French Colors",
        prompt:
          "Teach the student 5 basic colors in French: rouge, bleu, vert, jaune, blanc. Note that French adjectives change form with gender (e.g. vert/verte). Keep it simple for now — focus on the masculine form. Use object examples for each color.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly French teacher. Teach basic colors with vivid object examples. Mention the gender agreement rule briefly but keep it beginner-friendly. Encourage the student throughout.",
  },

  {
    id: "fr-unit1-lesson4",
    unitId: "fr-unit-1",
    languageId: "fr",
    title: "Daily Life",
    description: "Describe your everyday routine in French",
    xpReward: 10,
    image: "https://picsum.photos/seed/fr-daily/300/300",
    goals: ["Describe daily activities in French", "Use common action verbs", "Talk about your schedule"],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "manger",
          translation: "to eat",
          pronunciation: "mahn-ZHAY",
          example: "Je mange le matin.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "travailler",
          translation: "to work",
          pronunciation: "trah-vah-YAY",
          example: "Elle travaille à Paris.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "dormir",
          translation: "to sleep",
          pronunciation: "dor-MEER",
          example: "Je dors huit heures.",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "Qu'est-ce que tu fais?",
          translation: "What are you doing?",
          pronunciation: "kess-kuh-too-feh",
        },
      },
      {
        type: "quiz",
        question: "What does 'manger' mean?",
        options: [
          { id: "a", text: "to sleep", correct: false },
          { id: "b", text: "to work", correct: false },
          { id: "c", text: "to eat", correct: true },
          { id: "d", text: "to walk", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "French Daily Routine",
        prompt:
          "Teach the student how to describe their daily routine in French. Cover verbs like manger, travailler, étudier, dormir. Help them build a sentence like 'Je mange le matin et je travaille à midi.' Keep it conversational.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly French teacher. Guide the student through describing their daily routine using simple verbs. Encourage them to create their own sentences about their day.",
  },

  {
    id: "fr-unit1-lesson5",
    unitId: "fr-unit-1",
    languageId: "fr",
    title: "Food & Drink",
    description: "Order food and talk about meals in French",
    xpReward: 10,
    image: "https://picsum.photos/seed/fr-food/300/300",
    goals: ["Name common foods in French", "Order at a French café", "Express food preferences"],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "l'eau",
          translation: "water",
          pronunciation: "loh",
          example: "Un verre d'eau, s'il vous plaît.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "le pain",
          translation: "bread",
          pronunciation: "luh pan",
          example: "Je voudrais du pain.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "le café",
          translation: "coffee",
          pronunciation: "luh kah-FAY",
          example: "Un café, s'il vous plaît.",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "Je voudrais...",
          translation: "I would like...",
          pronunciation: "zhuh voo-DREH",
        },
      },
      {
        type: "quiz",
        question: "How do you say 'bread' in French?",
        options: [
          { id: "a", text: "l'eau", correct: false },
          { id: "b", text: "le café", correct: false },
          { id: "c", text: "le pain", correct: true },
          { id: "d", text: "le lait", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "French Café Ordering",
        prompt:
          "Teach the student how to order food and drink at a French café. Cover common items: café, thé, eau, croissant, pain. Role-play a scenario where the student orders breakfast. Teach the polite phrase 'Je voudrais...' and 'S'il vous plaît.'",
      },
    ],
    aiTeacherPrompt:
      "You are a French café owner teaching the student to order in French. Make it immersive and fun. Celebrate each correct phrase with enthusiasm.",
  },

  {
    id: "fr-unit1-lesson6",
    unitId: "fr-unit-1",
    languageId: "fr",
    title: "Travel & Directions",
    description: "Ask for and give directions in French",
    xpReward: 10,
    image: "https://picsum.photos/seed/fr-travel/300/300",
    goals: ["Ask for directions in French", "Understand location words", "Name key landmarks"],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "à gauche",
          translation: "to the left",
          pronunciation: "ah gohsh",
          example: "Tournez à gauche.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "à droite",
          translation: "to the right",
          pronunciation: "ah drwaht",
          example: "Allez à droite.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "la gare",
          translation: "the train station",
          pronunciation: "lah gar",
          example: "Où est la gare?",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "Où est...?",
          translation: "Where is...?",
          pronunciation: "oo-eh",
        },
      },
      {
        type: "quiz",
        question: "How do you say 'to the left' in French?",
        options: [
          { id: "a", text: "à droite", correct: false },
          { id: "b", text: "tout droit", correct: false },
          { id: "c", text: "à gauche", correct: true },
          { id: "d", text: "en face", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "French Directions",
        prompt:
          "Teach the student how to ask for and understand directions in French. Cover à gauche, à droite, tout droit, and key landmarks. Role-play finding the Eiffel Tower from a map. Keep it practical and fun.",
      },
    ],
    aiTeacherPrompt:
      "You are a Parisian helping a tourist find their way. Teach directions using a fun city exploration role-play. Be patient and encouraging.",
  },

  // ─── Japanese Unit 1 ──────────────────────────────────────────────────────

  {
    id: "ja-unit1-lesson1",
    unitId: "ja-unit-1",
    languageId: "ja",
    title: "Greetings & Introductions",
    description: "Say hello and thank you in Japanese",
    xpReward: 10,
    image: "https://picsum.photos/seed/ja-greet/300/300",
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
          "Teach the student basic Japanese greetings. Cover おはようございます (morning), こんにちは (afternoon), こんばんは (evening), ありがとう (thank you), and さようなら (goodbye). Explain pronunciation carefully using romaji. Ask the student to repeat each phrase.",
      },
    ],
    aiTeacherPrompt:
      "You are a kind and patient Japanese teacher. Your student is a complete beginner. Use romaji pronunciation guides alongside Japanese script. Keep explanations in English. Focus on making the student feel confident.",
  },

  {
    id: "ja-unit1-lesson2",
    unitId: "ja-unit-1",
    languageId: "ja",
    title: "Numbers 1–5",
    description: "Count from one to five in Japanese",
    xpReward: 10,
    image: "https://picsum.photos/seed/ja-numbers/300/300",
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
          "Teach the student to count from 1 to 5 in Japanese: いち, に, さん, し/よん, ご. Use romaji alongside hiragana. Mention that 4 has two readings (shi and yon). Count together slowly. End with a short quiz.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Japanese teacher. Teach numbers 1–5 with clear romaji pronunciation. Mention interesting cultural notes where relevant. Keep it beginner-friendly and fun.",
  },

  {
    id: "ja-unit1-lesson3",
    unitId: "ja-unit-1",
    languageId: "ja",
    title: "Colors",
    description: "Learn basic colors in Japanese",
    xpReward: 10,
    image: "https://picsum.photos/seed/ja-colors/300/300",
    goals: ["Name 5 basic colors in Japanese", "Describe objects using colors"],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "あか",
          translation: "red",
          pronunciation: "a-ka",
          example: "りんごはあかです。(The apple is red.)",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "あお",
          translation: "blue",
          pronunciation: "a-o",
          example: "そらはあおです。(The sky is blue.)",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "きいろ",
          translation: "yellow",
          pronunciation: "ki-i-ro",
          example: "バナナはきいろです。",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "しろ",
          translation: "white",
          pronunciation: "shi-ro",
          example: "ゆきはしろです。(Snow is white.)",
        },
      },
      {
        type: "quiz",
        question: "How do you say 'blue' in Japanese?",
        options: [
          { id: "a", text: "あか", correct: false },
          { id: "b", text: "あお", correct: true },
          { id: "c", text: "きいろ", correct: false },
          { id: "d", text: "しろ", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "Japanese Colors",
        prompt:
          "Teach the student 5 basic colors in Japanese: あか (red), あお (blue), きいろ (yellow), しろ (white), くろ (black). Use romaji and hiragana. Give a simple object example for each. Quiz the student at the end.",
      },
    ],
    aiTeacherPrompt:
      "You are a patient Japanese teacher. Teach colors using simple hiragana with romaji guides. Use everyday object examples to make colors memorable. Be encouraging throughout.",
  },

  {
    id: "ja-unit1-lesson4",
    unitId: "ja-unit-1",
    languageId: "ja",
    title: "Daily Life",
    description: "Describe your everyday routine in Japanese",
    xpReward: 10,
    image: "https://picsum.photos/seed/ja-daily/300/300",
    goals: ["Describe daily activities in Japanese", "Use common action verbs", "Tell the time of day"],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "たべる",
          translation: "to eat",
          pronunciation: "ta-be-ru",
          example: "あさごはんをたべます。(I eat breakfast.)",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "ねる",
          translation: "to sleep",
          pronunciation: "ne-ru",
          example: "はちじにねます。(I sleep at 8 o'clock.)",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "いく",
          translation: "to go",
          pronunciation: "i-ku",
          example: "がっこうにいきます。(I go to school.)",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "まいにち",
          translation: "every day",
          pronunciation: "ma-i-ni-chi",
        },
      },
      {
        type: "quiz",
        question: "What does 'たべる' mean?",
        options: [
          { id: "a", text: "to sleep", correct: false },
          { id: "b", text: "to go", correct: false },
          { id: "c", text: "to eat", correct: true },
          { id: "d", text: "to drink", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "Japanese Daily Routine",
        prompt:
          "Teach the student how to describe daily activities in Japanese. Cover たべる, ねる, いく, みる (to watch), and おきる (to wake up). Help them build simple sentences like 'あさごはんをたべます.' Use romaji alongside hiragana.",
      },
    ],
    aiTeacherPrompt:
      "You are a kind Japanese teacher. Teach daily routine verbs with romaji guides. Help the student build simple, real-life sentences about their day. Be patient and encouraging.",
  },

  {
    id: "ja-unit1-lesson5",
    unitId: "ja-unit-1",
    languageId: "ja",
    title: "Food & Drink",
    description: "Talk about food and order at a Japanese restaurant",
    xpReward: 10,
    image: "https://picsum.photos/seed/ja-food/300/300",
    goals: ["Name common Japanese foods", "Order at a restaurant", "Express what you like"],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "すし",
          translation: "sushi",
          pronunciation: "su-shi",
          example: "すしがすきです。(I like sushi.)",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "みず",
          translation: "water",
          pronunciation: "mi-zu",
          example: "みずをください。(Water, please.)",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "おちゃ",
          translation: "green tea",
          pronunciation: "o-cha",
          example: "おちゃがすきです。(I like green tea.)",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "〜をください",
          translation: "Please give me ~",
          pronunciation: "~-wo ku-da-sai",
        },
      },
      {
        type: "quiz",
        question: "How do you say 'water' in Japanese?",
        options: [
          { id: "a", text: "おちゃ", correct: false },
          { id: "b", text: "すし", correct: false },
          { id: "c", text: "みず", correct: true },
          { id: "d", text: "ごはん", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "Japanese Food & Ordering",
        prompt:
          "Teach the student common Japanese food words: すし, ラーメン, ごはん, みず, おちゃ. Teach the phrase 〜をください for ordering. Role-play a restaurant scenario where the student orders a meal. Use romaji throughout.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Japanese restaurant host. Teach the student to order food using basic vocabulary and polite phrases. Make it fun with a role-play dining scenario.",
  },

  {
    id: "ja-unit1-lesson6",
    unitId: "ja-unit-1",
    languageId: "ja",
    title: "Travel & Directions",
    description: "Navigate and ask for directions in Japanese",
    xpReward: 10,
    image: "https://picsum.photos/seed/ja-travel/300/300",
    goals: ["Ask for directions in Japanese", "Understand location words", "Name transportation types"],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "みぎ",
          translation: "right",
          pronunciation: "mi-gi",
          example: "みぎにまがってください。(Please turn right.)",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "ひだり",
          translation: "left",
          pronunciation: "hi-da-ri",
          example: "ひだりにいってください。(Please go left.)",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "えき",
          translation: "train station",
          pronunciation: "e-ki",
          example: "えきはどこですか？(Where is the station?)",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "〜はどこですか？",
          translation: "Where is ~?",
          pronunciation: "~-wa do-ko-de-su-ka",
        },
      },
      {
        type: "quiz",
        question: "How do you say 'right' in Japanese?",
        options: [
          { id: "a", text: "ひだり", correct: false },
          { id: "b", text: "まっすぐ", correct: false },
          { id: "c", text: "みぎ", correct: true },
          { id: "d", text: "えき", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "Japanese Directions",
        prompt:
          "Teach the student how to ask for and give basic directions in Japanese. Cover みぎ (right), ひだり (left), まっすぐ (straight ahead), and key landmarks like えき (station) and ホテル (hotel). Use romaji with hiragana. Role-play a navigation scenario.",
      },
    ],
    aiTeacherPrompt:
      "You are a helpful Japanese local guiding a tourist. Teach directions using a Tokyo map scenario. Use romaji alongside Japanese script. Be patient and encouraging.",
  },

  // ─── Portuguese Unit 1 ────────────────────────────────────────────────────

  {
    id: "pt-unit1-lesson1",
    unitId: "pt-unit-1",
    languageId: "pt",
    title: "Greetings & Introductions",
    description: "Say hello and introduce yourself in Portuguese",
    xpReward: 10,
    image: "https://picsum.photos/seed/pt-greet/300/300",
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
          "Teach the student common Brazilian Portuguese greetings. Cover 'Olá', 'Bom dia', 'Boa tarde', 'Boa noite', and 'Tchau'. Give one example sentence for each and ask the student to repeat. Keep it under 3 minutes.",
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
    image: "https://picsum.photos/seed/pt-numbers/300/300",
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
          "Teach the student to count from 1 to 5 in Brazilian Portuguese: um, dois, três, quatro, cinco. Pronounce each number clearly and ask the student to repeat. Count together, then quiz the student.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Brazilian Portuguese teacher teaching numbers 1 to 5. Use simple repetition and gentle encouragement. The student is a total beginner.",
  },

  {
    id: "pt-unit1-lesson3",
    unitId: "pt-unit-1",
    languageId: "pt",
    title: "Colors",
    description: "Learn basic colors in Portuguese",
    xpReward: 10,
    image: "https://picsum.photos/seed/pt-colors/300/300",
    goals: ["Name 5 basic colors in Portuguese", "Describe objects using colors"],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "vermelho",
          translation: "red",
          pronunciation: "ver-MEH-lyoo",
          example: "O tomate é vermelho.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "azul",
          translation: "blue",
          pronunciation: "ah-ZOOL",
          example: "O céu é azul.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "verde",
          translation: "green",
          pronunciation: "VEHR-jee",
          example: "A maçã é verde.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "amarelo",
          translation: "yellow",
          pronunciation: "ah-mah-REH-loo",
          example: "O sol é amarelo.",
        },
      },
      {
        type: "quiz",
        question: "How do you say 'blue' in Portuguese?",
        options: [
          { id: "a", text: "verde", correct: false },
          { id: "b", text: "vermelho", correct: false },
          { id: "c", text: "azul", correct: true },
          { id: "d", text: "amarelo", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "Portuguese Colors",
        prompt:
          "Teach the student 5 basic colors in Portuguese: vermelho, azul, verde, amarelo, branco. For each color, give the pronunciation and an object example. Quiz the student at the end by describing an object.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Brazilian Portuguese teacher. Teach colors with vivid object examples. Use everyday Brazilian references. Encourage the student throughout.",
  },

  {
    id: "pt-unit1-lesson4",
    unitId: "pt-unit-1",
    languageId: "pt",
    title: "Daily Life",
    description: "Describe your everyday routine in Portuguese",
    xpReward: 10,
    image: "https://picsum.photos/seed/pt-daily/300/300",
    goals: ["Describe daily activities in Portuguese", "Use common action verbs", "Talk about your schedule"],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "comer",
          translation: "to eat",
          pronunciation: "koh-MEHR",
          example: "Eu como de manhã.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "trabalhar",
          translation: "to work",
          pronunciation: "trah-bah-LYAR",
          example: "Ela trabalha no escritório.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "dormir",
          translation: "to sleep",
          pronunciation: "dor-MEER",
          example: "Eu durmo oito horas.",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "O que você faz todo dia?",
          translation: "What do you do every day?",
          pronunciation: "oo-keh-vo-SAY-fahs-TOH-doo-JEE-ah",
        },
      },
      {
        type: "quiz",
        question: "What does 'trabalhar' mean?",
        options: [
          { id: "a", text: "to eat", correct: false },
          { id: "b", text: "to sleep", correct: false },
          { id: "c", text: "to work", correct: true },
          { id: "d", text: "to walk", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "Portuguese Daily Routine",
        prompt:
          "Teach the student how to describe their daily routine in Brazilian Portuguese. Cover verbs like comer, trabalhar, estudar, dormir. Help them build simple sentences about their day.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Brazilian Portuguese teacher. Help the student describe their day using simple verbs and time expressions. Encourage them to create their own sentences.",
  },

  {
    id: "pt-unit1-lesson5",
    unitId: "pt-unit-1",
    languageId: "pt",
    title: "Food & Drink",
    description: "Order food and talk about meals in Portuguese",
    xpReward: 10,
    image: "https://picsum.photos/seed/pt-food/300/300",
    goals: ["Name common Brazilian foods", "Order at a restaurant", "Express food preferences"],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "água",
          translation: "water",
          pronunciation: "AH-gwah",
          example: "Um copo de água, por favor.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "pão",
          translation: "bread",
          pronunciation: "powng",
          example: "Eu gosto de pão de queijo.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "café",
          translation: "coffee",
          pronunciation: "kah-FEH",
          example: "Um café, por favor.",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "Eu gostaria de...",
          translation: "I would like...",
          pronunciation: "eh-oo-gohs-tah-REE-ah-jee",
        },
      },
      {
        type: "quiz",
        question: "How do you say 'water' in Portuguese?",
        options: [
          { id: "a", text: "pão", correct: false },
          { id: "b", text: "café", correct: false },
          { id: "c", text: "água", correct: true },
          { id: "d", text: "leite", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "Portuguese Food & Ordering",
        prompt:
          "Teach the student how to order food and drink in a Brazilian restaurant. Cover common items: água, café, pão de queijo, arroz, feijão. Teach 'Eu gostaria de...' for ordering. Role-play a restaurant scenario.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Brazilian waiter teaching the student to order food in Portuguese. Make it immersive with a role-play scenario at a Brazilian restaurant. Celebrate every correct phrase.",
  },

  {
    id: "pt-unit1-lesson6",
    unitId: "pt-unit-1",
    languageId: "pt",
    title: "Travel & Directions",
    description: "Ask for and give directions in Portuguese",
    xpReward: 10,
    image: "https://picsum.photos/seed/pt-travel/300/300",
    goals: ["Ask for directions in Portuguese", "Understand location words", "Name key places"],
    activities: [
      {
        type: "vocabulary",
        vocab: {
          word: "esquerda",
          translation: "left",
          pronunciation: "esh-KEHR-dah",
          example: "Vire à esquerda.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "direita",
          translation: "right",
          pronunciation: "jee-RAY-tah",
          example: "Siga à direita.",
        },
      },
      {
        type: "vocabulary",
        vocab: {
          word: "o aeroporto",
          translation: "the airport",
          pronunciation: "oo-ah-eh-roh-POR-too",
          example: "Onde fica o aeroporto?",
        },
      },
      {
        type: "phrase",
        phrase: {
          phrase: "Onde fica...?",
          translation: "Where is...?",
          pronunciation: "OHN-jee-FEE-kah",
        },
      },
      {
        type: "quiz",
        question: "How do you say 'left' in Portuguese?",
        options: [
          { id: "a", text: "direita", correct: false },
          { id: "b", text: "reto", correct: false },
          { id: "c", text: "esquerda", correct: true },
          { id: "d", text: "aqui", correct: false },
        ],
      },
      {
        type: "ai-teacher",
        topic: "Portuguese Directions",
        prompt:
          "Teach the student how to ask for and give directions in Brazilian Portuguese. Cover esquerda, direita, reto (straight), and key landmarks. Role-play finding a famous Brazilian landmark from a map.",
      },
    ],
    aiTeacherPrompt:
      "You are a friendly Brazilian helping a tourist navigate. Teach directions using a São Paulo or Rio city scenario. Be patient and encouraging, using clear English explanations alongside Portuguese.",
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
