const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = withNativewind(config, {
  input: "./global.css",
  // Inline variables break PlatformColor in CSS variables
  inlineVariables: false,
  globalClassNamePolyfill: false,
});
