export const colors = {
  // Primary brand
  linguaPurple: "#6C4EF5",
  linguaDeepPurple: "#5B3BF6",
  linguaBlue: "#4D88FF",
  linguaGreen: "#21C168",

  // Semantic
  success: "#21C168",
  warning: "#FFCB00",
  streak: "#FF8A00",
  error: "#FF4D4F",
  info: "#4D88FF",

  // Neutrals
  ink: "#001328",       // text / primary
  inkLight: "#6B7280",  // text / secondary
  stroke: "#E5E7EB",    // border
  mist: "#F6F7FB",      // surface
  white: "#FFFFFF",     // background
} as const;

export type ColorKey = keyof typeof colors;
