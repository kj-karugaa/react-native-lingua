import { StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { View, Text, Pressable, Image } from '@/tw';
import { images } from '@/constants/images';

const MASCOT_SIZE = Dimensions.get('window').width * 0.78;

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo row */}
      <View className="flex-row items-center px-6 pt-4 mb-6">
        <Image source={images.mascotLogo} className="w-9 h-9" resizeMode="contain" />
        <Text className="text-base font-poppins-semibold text-text-primary ml-2">lingua</Text>
      </View>

      {/* Headline */}
      <View className="px-6 mb-3">
        <Text className="h1">Your AI language</Text>
        <View className="flex-row items-baseline">
          <Text className="h1 text-lingua-purple">teacher</Text>
          <Text className="h1">.</Text>
        </View>
      </View>

      {/* Subtitle */}
      <Text className="body-md text-text-secondary px-6 mb-6">
        Real conversations, personalized{'\n'}lessons, anytime, anywhere.
      </Text>

      {/* Mascot + speech bubbles */}
      <View className="flex-1 items-center justify-center">
        <View style={styles.mascotContainer}>
          <Image source={images.mascot} style={styles.mascotImage} resizeMode="contain" />

          {/* Hello! bubble — left */}
          <View className="absolute bg-white px-3.5 py-2 rounded-[20px]" style={styles.bubbleHello}>
            <Text className="body-md font-poppins-medium">Hello!</Text>
          </View>

          {/* ¡Hola! bubble — top right */}
          <View className="absolute bg-white px-3.5 py-2 rounded-[20px]" style={styles.bubbleHola}>
            <Text className="body-md font-poppins-medium">¡Hola!</Text>
          </View>

          {/* 你好! bubble — bottom right */}
          <View className="absolute bg-white px-3.5 py-2 rounded-[20px]" style={styles.bubbleChinese}>
            <Text className="body-md text-[#c0392b]">你好!</Text>
          </View>
        </View>
      </View>

      {/* Get Started button */}
      <View className="px-6 pb-6">
        <Pressable className="btn-primary" onPress={() => router.push('/(auth)/sign-up')}>
          <View className="flex-row items-center justify-center relative">
            <Text className="btn-primary-text">Get Started</Text>
            <Text className="absolute right-0 text-white text-[22px]">›</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // SafeAreaView — className not supported
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  // Dynamic values computed from screen width at runtime
  mascotContainer: {
    width: MASCOT_SIZE,
    height: MASCOT_SIZE,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mascotImage: {
    width: MASCOT_SIZE,
    height: MASCOT_SIZE,
  },
  // Shadow is a platform-specific exception (iOS/Android differ) + dynamic position
  bubbleHello: {
    left: -16,
    top: Math.round(MASCOT_SIZE * 0.32),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  bubbleHola: {
    right: -16,
    top: Math.round(MASCOT_SIZE * 0.06),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  bubbleChinese: {
    right: 0,
    bottom: Math.round(MASCOT_SIZE * 0.2),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
});
