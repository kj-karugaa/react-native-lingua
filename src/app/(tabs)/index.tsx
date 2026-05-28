import { StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUser } from '@clerk/expo';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, ScrollView, Image } from '@/tw';
import { useLearningStore } from '@/store/learning';
import { images } from '@/constants/images';
import { getLessonsByLanguage } from '@/data/lessons';
import { getUnitsByLanguage } from '@/data/units';
import { colors } from '@/theme/colors';

const DAILY_GOAL_XP = 20;

const LANGUAGE_GREETINGS: Record<string, string> = {
  es: 'Hola',
  fr: 'Bonjour',
  ja: 'こんにちは',
  pt: 'Olá',
  ko: '안녕',
  de: 'Hallo',
  zh: '你好',
};

const PLAN_ITEMS = [
  {
    id: 'lesson',
    title: 'Lesson',
    iconName: 'book' as const,
    iconColor: '#4D88FF',
    iconBg: '#EBF4FF',
  },
  {
    id: 'ai-conversation',
    title: 'AI Conversation',
    subtitle: 'Talk about your day',
    iconName: 'headset' as const,
    iconColor: '#6C4EF5',
    iconBg: '#F0EDFF',
    completed: false,
  },
  {
    id: 'new-words',
    title: 'New words',
    subtitle: '10 words',
    iconName: 'chatbubble' as const,
    iconColor: '#FF8A00',
    iconBg: '#FFF4E6',
    completed: false,
  },
];

export default function HomeScreen() {
  const { user } = useUser();
  const { selectedLanguage, dailyXP, streak, completedLessons } = useLearningStore();

  const firstName = user?.firstName ?? 'Friend';
  const greeting = selectedLanguage
    ? (LANGUAGE_GREETINGS[selectedLanguage.id] ?? 'Hello')
    : 'Hello';

  const languageLessons = selectedLanguage ? getLessonsByLanguage(selectedLanguage.id) : [];
  const languageUnits = selectedLanguage ? getUnitsByLanguage(selectedLanguage.id) : [];
  const firstUnit = languageUnits[0];
  const firstLesson = languageLessons[0];

  const progressPercent = Math.min((dailyXP / DAILY_GOAL_XP) * 100, 100);

  const planItems = [
    {
      ...PLAN_ITEMS[0],
      subtitle: firstLesson?.title ?? 'Greetings',
      completed: firstLesson ? completedLessons.includes(firstLesson.id) : false,
    },
    PLAN_ITEMS[1],
    PLAN_ITEMS[2],
  ];

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 pt-3 pb-8 gap-4"
      >
        {/* ── Header ─────────────────────────────────── */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            {selectedLanguage ? (
              <Image
                source={{ uri: selectedLanguage.flag }}
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <View className="w-8 h-8 rounded-full bg-border" />
            )}
            <Text className="font-poppins-semibold text-[17px] text-text-primary">
              {greeting}, {firstName}! 👋
            </Text>
          </View>

          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center gap-1">
              <Image
                source={images.streakFire}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="font-poppins-bold text-[14px] text-text-primary">
                {streak}
              </Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={22} color={colors.inkLight} />
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Daily Goal Card ─────────────────────────── */}
        <View className="flex-row items-center bg-[#FFF5EB] rounded-[20px] pl-5 pr-2 py-4 overflow-hidden">
          <View className="flex-1 justify-center gap-1">
            <Text className="font-poppins text-[12px] text-text-secondary">
              Daily goal
            </Text>
            <Text className="font-poppins-bold text-[22px] text-text-primary">
              {dailyXP} / {DAILY_GOAL_XP} XP
            </Text>
            <View className="h-[7px] bg-border rounded mt-[6px] overflow-hidden">
              <View
                className="h-full bg-streak rounded"
                style={{ width: `${progressPercent}%` as any }}
              />
            </View>
          </View>
          <Image
            source={images.treasure}
            className="w-[90px] h-[90px]"
            resizeMode="contain"
          />
        </View>

        {/* ── Continue Learning Card ───────────────────── */}
        {selectedLanguage && (
          <View className="flex-row items-center bg-lingua-deep-purple rounded-[20px] pl-5 py-5 overflow-hidden min-h-[160px]">
            <View className="flex-1 justify-center gap-2">
              <Text className="font-poppins text-[12px] text-white/80">
                Continue learning
              </Text>
              <Text className="font-poppins-bold text-[22px] text-white">
                {selectedLanguage.name}
              </Text>
              <Text className="font-poppins text-[13px] text-white/80">
                A1 · {firstUnit ? `Unit ${firstUnit.order}` : 'Unit 1'}
              </Text>
              <TouchableOpacity style={styles.continueButton}>
                <Text className="font-poppins-bold text-[14px] text-lingua-purple">
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
            <Image
              source={images.palace}
              className="absolute bottom-0 right-[-8px] w-[130px] h-[160px]"
              resizeMode="contain"
            />
          </View>
        )}

        {/* ── Today's Plan ─────────────────────────────── */}
        <View className="gap-3">
          <View className="flex-row items-center justify-between">
            <Text className="font-poppins-semibold text-[17px] text-text-primary">
              Today's plan
            </Text>
            <TouchableOpacity>
              <Text className="font-poppins-medium text-[14px] text-lingua-purple">
                View all
              </Text>
            </TouchableOpacity>
          </View>

          <View className="bg-white rounded-2xl border border-border overflow-hidden">
            {planItems.map((item, index) => (
              <View key={item.id}>
                <View className="flex-row items-center px-4 py-3 gap-3">
                  <View
                    className="w-[42px] h-[42px] rounded-xl items-center justify-center"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    <Ionicons name={item.iconName as any} size={20} color={item.iconColor} />
                  </View>

                  <View className="flex-1 gap-0.5">
                    <Text className="font-poppins-medium text-[14px] text-text-primary">
                      {item.title}
                    </Text>
                    <Text className="font-poppins text-[12px] text-text-secondary">
                      {item.subtitle}
                    </Text>
                  </View>

                  {item.completed ? (
                    <View className="w-[26px] h-[26px] rounded-full bg-lingua-blue items-center justify-center">
                      <Ionicons name="checkmark" size={14} color="#fff" />
                    </View>
                  ) : (
                    <View className="w-[26px] h-[26px] rounded-full border-2 border-border" />
                  )}
                </View>

                {index < planItems.length - 1 && (
                  <View className="h-px bg-border ml-[72px]" />
                )}
              </View>
            ))}
          </View>
        </View>

        {/* ── Next Up Card ─────────────────────────────── */}
        <View className="flex-row items-center bg-[#F0EDFF] rounded-[20px] p-4 gap-3">
          <View className="flex-1 justify-center gap-1">
            <Text className="font-poppins text-[11px] text-text-secondary">
              Next up
            </Text>
            <Text className="font-poppins-semibold text-[16px] text-text-primary">
              AI Video Call
            </Text>
            <Text className="font-poppins text-[12px] text-text-secondary">
              Practice speaking
            </Text>
          </View>

          <View className="flex-row items-center gap-3">
            <Image
              source={{ uri: 'https://picsum.photos/seed/teacher42/80/80' }}
              className="w-14 h-14 rounded-full"
            />
            <TouchableOpacity style={styles.videoButton}>
              <Ionicons name="videocam" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  // TouchableOpacity — not supported by NativeWind className (AGENTS.md exception)
  continueButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginTop: 4,
  },
  videoButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#21C168',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
