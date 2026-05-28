import { useCssElement } from "react-native-css";
import { Link as RouterLink } from "expo-router";
import Animated from "react-native-reanimated";
import React from "react";
import {
  View as RNView,
  Text as RNText,
  Pressable as RNPressable,
  ScrollView as RNScrollView,
  TextInput as RNTextInput,
  TouchableHighlight as RNTouchableHighlight,
  StyleSheet,
} from "react-native";

export const View = (props: React.ComponentProps<typeof RNView> & { className?: string }) =>
  useCssElement(RNView, props, { className: "style" });
View.displayName = "CSS(View)";

export const Text = (props: React.ComponentProps<typeof RNText> & { className?: string }) =>
  useCssElement(RNText, props, { className: "style" });
Text.displayName = "CSS(Text)";

export const Pressable = (props: React.ComponentProps<typeof RNPressable> & { className?: string }) =>
  useCssElement(RNPressable, props, { className: "style" });
Pressable.displayName = "CSS(Pressable)";

export const ScrollView = (
  props: React.ComponentProps<typeof RNScrollView> & {
    className?: string;
    contentContainerClassName?: string;
  }
) => useCssElement(RNScrollView, props, { className: "style", contentContainerClassName: "contentContainerStyle" });
ScrollView.displayName = "CSS(ScrollView)";

export const TextInput = (props: React.ComponentProps<typeof RNTextInput> & { className?: string }) =>
  useCssElement(RNTextInput, props, { className: "style" });
TextInput.displayName = "CSS(TextInput)";

function _TouchableHighlight(props: React.ComponentProps<typeof RNTouchableHighlight>) {
  const { underlayColor, ...style } = StyleSheet.flatten(props.style) || {};
  return <RNTouchableHighlight underlayColor={underlayColor as string} {...props} style={style} />;
}

export const TouchableHighlight = (props: React.ComponentProps<typeof RNTouchableHighlight> & { className?: string }) =>
  useCssElement(_TouchableHighlight, props, { className: "style" });
TouchableHighlight.displayName = "CSS(TouchableHighlight)";

export const AnimatedScrollView = (
  props: React.ComponentProps<typeof Animated.ScrollView> & {
    className?: string;
    contentContainerClassName?: string;
  }
) =>
  useCssElement(Animated.ScrollView, props, {
    className: "style",
    contentContainerClassName: "contentContainerStyle",
  });

export const Link = (props: React.ComponentProps<typeof RouterLink> & { className?: string }) =>
  useCssElement(RouterLink, props, { className: "style" });
