import { TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { View, Text, ScrollView, Image } from '@/tw';
import { useLearningStore } from '@/store/learning';
import { getUnitsByLanguage } from '@/data/units';
import { getLessonsByUnit } from '@/data/lessons';
import { colors } from '@/theme/colors';
import { images } from '@/constants/images';
import { LessonCard, LessonStatus } from '@/components/LessonCard';

export default function LearnScreen() {
  const { selectedLanguage, completedLessons } = useLearningStore();
  const [activeTab, setActiveTab] = useState<'lessons' | 'practice'>('lessons');
  const router = useRouter();

  const units = selectedLanguage ? getUnitsByLanguage(selectedLanguage.id) : [];
  const unit = units[0];
  const lessons = unit ? getLessonsByUnit(unit.id) : [];

  const completedCount = lessons.filter((l) => completedLessons.includes(l.id)).length;
  const firstIncompleteIdx = lessons.findIndex((l) => !completedLessons.includes(l.id));

  function getLessonStatus(lessonId: string, index: number): LessonStatus {
    if (completedLessons.includes(lessonId)) return 'completed';
    if (index === firstIncompleteIdx) return 'in-progress';
    return 'upcoming';
  }

  if (!selectedLanguage) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }} edges={['top']}>
        <View className="flex-1 items-center justify-center px-10" style={{ gap: 16 }}>
          <Image
            source={images.mascot}
            style={{ width: 130, height: 130 }}
            resizeMode="contain"
          />
          <Text className="h3 text-center">No language selected</Text>
          <Text className="body-md text-text-secondary text-center">
            Go to the home tab and pick a language to start learning.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!unit) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }} edges={['top']}>
        <View className="flex-1 items-center justify-center px-10" style={{ gap: 16 }}>
          <Image
            source={images.mascot}
            style={{ width: 130, height: 130 }}
            resizeMode="contain"
          />
          <Text className="h3 text-center">{selectedLanguage.name} coming soon</Text>
          <Text className="body-md text-text-secondary text-center">
            We're building lessons for {selectedLanguage.name}. Check back soon!
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }} edges={['top']}>
      {/* ── Header ─────────────────────────────────────────────────── */}
      <View style={styles.header}>
        {/* Decorative background palace illustration */}
        <Image
          source={images.palace}
          style={styles.palaceBg}
          resizeMode="cover"
        />

        {/* Header content */}
        <View className="px-5 pt-4 flex-1">
          <View className="flex-row justify-between items-start">
            <View className="flex-1 mr-3">
              <Text style={styles.unitMeta}>
                Unit {unit.order} · {completedCount}/{lessons.length} lessons
              </Text>
              <Text style={styles.unitTitle}>{unit.title}</Text>
              <Text style={styles.unitDesc} numberOfLines={2}>
                {unit.description}
              </Text>
            </View>
            <TouchableOpacity
              hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
            >
              <Ionicons name="bookmark-outline" size={22} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Mascot illustration */}
        <Image
          source={images.mascot}
          style={styles.mascot}
          resizeMode="contain"
        />
      </View>

      {/* ── Tabs ────────────────────────────────────────────────────── */}
      <View className="flex-row border-b border-border bg-background">
        {(['lessons', 'practice'] as const).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.tabActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabLabel, activeTab === tab && styles.tabLabelActive]}>
              {tab === 'lessons' ? 'Lessons' : 'Practice'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* ── Content ─────────────────────────────────────────────────── */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {activeTab === 'lessons' ? (
          <View className="pt-2 pb-8">
            {lessons.map((lesson, index) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                index={index}
                status={getLessonStatus(lesson.id, index)}
                onPress={() => router.push(`/lesson/${lesson.id}`)}
              />
            ))}
          </View>
        ) : (
          <View className="items-center justify-center px-10 py-20" style={{ gap: 14 }}>
            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: colors.mist,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons name="barbell-outline" size={36} color={colors.inkLight} />
            </View>
            <Text className="h3 text-center">Practice coming soon</Text>
            <Text className="body-md text-text-secondary text-center">
              Review vocabulary, flashcards, and test your skills here.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.linguaDeepPurple,
    height: 200,
    overflow: 'hidden',
    position: 'relative',
  },
  palaceBg: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 180,
    height: 180,
    opacity: 0.18,
  },
  unitMeta: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: 'rgba(255,255,255,0.68)',
    marginBottom: 4,
  },
  unitTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 26,
    color: colors.white,
    lineHeight: 32,
  },
  unitDesc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: 'rgba(255,255,255,0.58)',
    marginTop: 4,
    lineHeight: 18,
  },
  mascot: {
    position: 'absolute',
    right: 20,
    bottom: 0,
    width: 104,
    height: 136,
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    borderBottomWidth: 2.5,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: colors.linguaPurple,
  },
  tabLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.inkLight,
  },
  tabLabelActive: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.linguaPurple,
  },
});
