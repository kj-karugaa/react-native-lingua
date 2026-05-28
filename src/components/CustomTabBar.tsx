import { View, Pressable, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { colors } from '@/theme/colors';

const TAB_CONFIG = [
  { name: 'index', label: 'Home', activeIcon: 'home', inactiveIcon: 'home-outline' },
  { name: 'learn', label: 'Learn', activeIcon: 'book', inactiveIcon: 'book-outline' },
  { name: 'ai-teacher', label: 'AI Teacher', activeIcon: 'hardware-chip', inactiveIcon: 'hardware-chip-outline' },
  { name: 'chat', label: 'Chat', activeIcon: 'chatbubbles', inactiveIcon: 'chatbubbles-outline' },
  { name: 'profile', label: 'Profile', activeIcon: 'person', inactiveIcon: 'person-outline' },
] as const;

const TAB_BAR_HEIGHT = 72;
const CIRCLE_SIZE = 54;
const TIMING_CONFIG = { duration: 220, easing: Easing.out(Easing.cubic) };

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const tabWidth = width / state.routes.length;

  const circleX = useSharedValue(
    state.index * tabWidth + (tabWidth - CIRCLE_SIZE) / 2
  );

  const animatedCircleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: circleX.value }],
  }));

  useEffect(() => {
    circleX.value = withTiming(
      state.index * tabWidth + (tabWidth - CIRCLE_SIZE) / 2,
      TIMING_CONFIG
    );
  }, [state.index, tabWidth]);

  const handlePress = (routeName: string, index: number) => {
    const isFocused = state.index === index;

    const event = navigation.emit({
      type: 'tabPress',
      target: state.routes[index].key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(routeName);
    }
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {/* Animated purple circle behind icons */}
      <Animated.View style={[styles.circle, animatedCircleStyle]} />

      {/* Tab items row */}
      <View style={styles.tabsRow}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const config = TAB_CONFIG.find((t) => t.name === route.name) ?? TAB_CONFIG[0];
          const iconName = isFocused ? config.activeIcon : config.inactiveIcon;

          return (
            <Pressable
              key={route.key}
              onPress={() => handlePress(route.name, index)}
              style={styles.tab}
            >
              <Ionicons
                name={iconName as any}
                size={22}
                color={isFocused ? colors.white : colors.inkLight}
              />
              {!isFocused && (
                <Text style={styles.label}>{config.label}</Text>
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.stroke,
  },
  circle: {
    position: 'absolute',
    top: (TAB_BAR_HEIGHT - CIRCLE_SIZE) / 2,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: colors.linguaPurple,
  },
  tabsRow: {
    flexDirection: 'row',
    height: TAB_BAR_HEIGHT,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: colors.inkLight,
  },
});
