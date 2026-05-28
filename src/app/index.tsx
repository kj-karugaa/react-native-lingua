import { Text, View, Pressable } from '@/tw';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center gap-4 bg-background px-6">
      <Text className="h1 color-lingua-purple">Lingua</Text>
      <Pressable
        className="btn-primary w-full"
        onPress={() => router.push('/onboarding')}
      >
        <Text className="btn-primary-text text-center">View Onboarding</Text>
      </Pressable>
    </View>
  );
}
