import { useAuth } from '@clerk/expo';
import { Redirect } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';
import { useLearningStore } from '@/store/learning';

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const selectedLanguage = useLearningStore((s) => s.selectedLanguage);
  const hasHydrated = useLearningStore((s) => s._hasHydrated);

  if (!isLoaded || !hasHydrated) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#6c4ef5" />
      </View>
    );
  }

  if (!isSignedIn) return <Redirect href="/onboarding" />;

  if (!selectedLanguage) return <Redirect href="/language-selection" />;

  return <Redirect href="/(tabs)" />;
}
