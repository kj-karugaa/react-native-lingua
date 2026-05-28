export const fontFamily = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

// Font size scale (px)
export const fontSize = {
  h1: 32,        // Page / Screen Title
  h2: 24,        // Section Title
  h3: 20,        // Card / Module Title
  h4: 16,        // Subheading
  bodyLg: 16,    // Important content
  bodyMd: 14,    // Body text
  bodySm: 13,    // Supporting text
  caption: 11,   // Labels / meta text
} as const;

// Absolute line heights (px)
export const lineHeight = {
  h1: 38,
  h2: 31,
  h3: 26,
  h4: 22,
  bodyLg: 26,
  bodyMd: 22,
  bodySm: 21,
  caption: 15,
} as const;

export const fontWeight = {
  h1: "700" as const,
  h2: "600" as const,
  h3: "600" as const,
  h4: "500" as const,
  bodyLg: "400" as const,
  bodyMd: "400" as const,
  bodySm: "400" as const,
  caption: "400" as const,
} as const;

// Pre-composed text styles for use with StyleSheet
export const textStyles = {
  h1: { fontFamily: fontFamily.bold, fontSize: fontSize.h1, lineHeight: lineHeight.h1 },
  h2: { fontFamily: fontFamily.semiBold, fontSize: fontSize.h2, lineHeight: lineHeight.h2 },
  h3: { fontFamily: fontFamily.semiBold, fontSize: fontSize.h3, lineHeight: lineHeight.h3 },
  h4: { fontFamily: fontFamily.medium, fontSize: fontSize.h4, lineHeight: lineHeight.h4 },
  bodyLg: { fontFamily: fontFamily.regular, fontSize: fontSize.bodyLg, lineHeight: lineHeight.bodyLg },
  bodyMd: { fontFamily: fontFamily.regular, fontSize: fontSize.bodyMd, lineHeight: lineHeight.bodyMd },
  bodySm: { fontFamily: fontFamily.regular, fontSize: fontSize.bodySm, lineHeight: lineHeight.bodySm },
  caption: { fontFamily: fontFamily.regular, fontSize: fontSize.caption, lineHeight: lineHeight.caption },
} as const;
