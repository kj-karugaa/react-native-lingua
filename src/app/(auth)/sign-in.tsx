import { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSignIn, useSSO } from '@clerk/expo';
import { View, Text, Pressable, TextInput, Image, ScrollView } from '@/tw';
import { images } from '@/constants/images';
import SocialButton from '@/components/SocialButton';
import VerificationModal from '@/components/VerificationModal';
import { usePostHog } from 'posthog-react-native';

export default function SignInScreen() {
  const router = useRouter();
  const posthog = usePostHog();
  const { signIn, errors, fetchStatus } = useSignIn();
  const { startSSOFlow } = useSSO();

  const [email, setEmail] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [verifyError, setVerifyError] = useState('');
  const [ssoLoading, setSsoLoading] = useState<'google' | 'apple' | null>(null);

  const isLoading = fetchStatus === 'fetching';

  const handleSignIn = async () => {
    const { error } = await signIn.emailCode.sendCode({ emailAddress: email });
    if (error) return;
    setVerifyError('');
    setShowVerification(true);
  };

  const handleVerify = async (code: string) => {
    setVerifyLoading(true);
    setVerifyError('');
    const { error } = await signIn.emailCode.verifyCode({ code });
    if (error) {
      setVerifyError(errors.fields.code?.message ?? error.message ?? 'Invalid code. Please try again.');
      setVerifyLoading(false);
      return;
    }
    if (signIn.status === 'complete') {
      await signIn.finalize();
      const { user } = useUser();
      if (user) {
        posthog.identify(user.id, { $set: { email } });
      }
      posthog.capture('user_signed_in', { method: 'email_otp' });
    }
    setVerifyLoading(false);
  };

  const handleResend = async () => {
    setVerifyError('');
    await signIn.emailCode.sendCode({ emailAddress: email });
  };

  const handleSSOSignIn = async (strategy: 'oauth_google' | 'oauth_apple') => {
    if (ssoLoading) return;
    const provider = strategy === 'oauth_google' ? 'google' : 'apple';
    setSsoLoading(provider);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        posthog.capture('sso_sign_in_completed', { provider, is_sign_up: false });
        router.replace('/');
      }
    } catch {
      // user cancelled or browser error — non-fatal
    } finally {
      setSsoLoading(null);
    }
  };

  const globalError = errors.global?.[0]?.message;

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
            {errors.fields.identifier ? (
              <Text className="body-sm mt-1" style={{ color: '#e53e3e' }}>
                {errors.fields.identifier.message}
              </Text>
            ) : null}
          </View>

          {/* Global error */}
          {globalError ? (
            <Text className="body-sm mb-4 text-center" style={{ color: '#e53e3e' }}>
              {globalError}
            </Text>
          ) : null}

          {/* Sign In button */}
          <Pressable
            className="btn-primary mb-6"
            onPress={handleSignIn}
            disabled={isLoading || !email}
            style={{ opacity: isLoading || !email ? 0.6 : 1 }}
          >
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
            <SocialButton
              iconName="logo-google"
              label={ssoLoading === 'google' ? 'Opening Google…' : 'Continue with Google'}
              iconColor="#DB4437"
              onPress={() => handleSSOSignIn('oauth_google')}
              disabled={!!ssoLoading}
            />
            <SocialButton iconName="logo-facebook" label="Continue with Facebook" iconColor="#1877F2" />
            <SocialButton
              iconName="logo-apple"
              label={ssoLoading === 'apple' ? 'Opening Apple…' : 'Continue with Apple'}
              iconColor="#000000"
              onPress={() => handleSSOSignIn('oauth_apple')}
              disabled={!!ssoLoading}
            />
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
        onVerify={handleVerify}
        onResend={handleResend}
        error={verifyError}
        loading={verifyLoading}
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
