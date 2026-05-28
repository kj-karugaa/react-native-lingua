import { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Pressable, TextInput, Image, ScrollView } from '@/tw';
import { images } from '@/constants/images';
import SocialButton from '@/components/SocialButton';
import VerificationModal from '@/components/VerificationModal';

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [showVerification, setShowVerification] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerClassName="px-6 pt-2 pb-8"
          keyboardShouldPersistTaps="handled"
        >
          {/* Back button */}
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} color="#001328" />
          </Pressable>

          {/* Title */}
          <Text className="h1 mb-1">Welcome back</Text>
          <Text className="body-md text-text-secondary mb-6">
            Sign in to continue your journey ✨
          </Text>

          {/* Mascot */}
          <View className="items-center mb-6">
            <Image
              source={images.mascot}
              style={styles.mascot}
              resizeMode="contain"
            />
          </View>

          {/* Email input */}
          <View className="mb-6">
            <Text className="body-sm text-text-secondary mb-1.5">Email</Text>
            <TextInput
              className="border border-border rounded-[16px] px-4 body-lg"
              placeholder="alex@gmail.com"
              placeholderTextColor="#9ca3af"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"
              style={styles.input}
            />
          </View>

          {/* Sign In button */}
          <Pressable className="btn-primary mb-6" onPress={() => setShowVerification(true)}>
            <Text className="btn-primary-text">Sign In</Text>
          </Pressable>

          {/* Divider */}
          <View className="flex-row items-center mb-5">
            <View className="flex-1 h-px bg-border" />
            <Text className="body-sm text-text-secondary mx-4">or continue with</Text>
            <View className="flex-1 h-px bg-border" />
          </View>

          {/* Social buttons */}
          <View className="gap-3 mb-8">
            <SocialButton iconName="logo-google" label="Continue with Google" iconColor="#DB4437" />
            <SocialButton iconName="logo-facebook" label="Continue with Facebook" iconColor="#1877F2" />
            <SocialButton iconName="logo-apple" label="Continue with Apple" iconColor="#000000" />
          </View>

          {/* Footer */}
          <View className="flex-row justify-center">
            <Text className="body-sm text-text-secondary">Don't have an account? </Text>
            <Pressable onPress={() => router.replace('/(auth)/sign-up')}>
              <Text className="body-sm text-lingua-purple font-poppins-semibold">Sign up</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={showVerification}
        email={email}
        onClose={() => setShowVerification(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  flex: {
    flex: 1,
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 8,
    marginBottom: 16,
    marginLeft: -8,
  },
  mascot: {
    width: 150,
    height: 150,
  },
  input: {
    height: 52,
  },
});
