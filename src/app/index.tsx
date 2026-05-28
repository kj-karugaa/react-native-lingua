import { useAuth, useClerk } from '@clerk/expo';
import { Redirect } from 'expo-router';
import { View, ActivityIndicator, Pressable } from 'react-native';
import { Text } from '@/tw';

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#6c4ef5" />
      </View>
    );
  }

  if (!isSignedIn) return <Redirect href="/onboarding" />;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16, paddingHorizontal: 24 }}>
      <Text className="h1 color-lingua-purple">Welcome home!</Text>
      <Pressable
        style={{ backgroundColor: '#6c4ef5', paddingVertical: 14, paddingHorizontal: 32, borderRadius: 16, width: '100%', alignItems: 'center' }}
        onPress={() => signOut()}
      >
        <Text style={{ color: '#fff', fontFamily: 'Poppins-SemiBold', fontSize: 16 }}>Sign Out</Text>
      </Pressable>
    </View>
  );
}
