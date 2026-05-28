import { useEffect } from 'react';
import { useAuth, useUser } from '@clerk/expo';
import { Redirect } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';
import { useLearningStore } from '@/store/learning';
import { posthog } from '@/lib/posthog';

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const selectedLanguage = useLearningStore((s) => s.selectedLanguage);
  const hasHydrated = useLearningStore((s) => s._hasHydrated);

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      const properties: Record<string, string> = {};
      const email = user.primaryEmailAddress?.emailAddress;
      if (email) properties.email = email;
      if (user.fullName) properties.name = user.fullName;
      posthog.identify(user.id, { $set: properties });
    }
  }, [isLoaded, isSignedIn, user]);

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
