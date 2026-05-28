import { useState, useEffect, useRef } from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image, ScrollView } from '@/tw';
import { getLessonById } from '@/data/lessons';
import { languages } from '@/data/languages';
import { images } from '@/constants/images';
import { colors } from '@/theme/colors';
import type { PhraseActivity } from '@/types/learning';

type SessionPhase = 'intro' | 'teaching' | 'listening' | 'completed';

const TEACHER_MESSAGES: Record<SessionPhase, string> = {
  intro: "Welcome! I'm your AI language teacher. Let's dive into today's lesson together.",
  teaching: "Listen carefully and try to repeat after me. Take your time — I'm here to help.",
  listening: "Great job! Now it's your turn. Try using the phrases you just heard.",
  completed: "Excellent work today! You've completed this lesson. Keep practicing to build your skills! 🎉",
};

const PHASE_STATUS: Record<SessionPhase, string> = {
  intro: 'Connecting...',
  teaching: 'Susan is speaking',
  listening: 'Your turn to speak',
  completed: 'Lesson complete!',
};

const PHASE_STATUS_COLOR: Record<SessionPhase, string> = {
  intro: colors.linguaBlue,
  teaching: colors.linguaPurple,
  listening: colors.linguaGreen,
  completed: colors.warning,
};

const PHASE_BTN_LABEL: Record<SessionPhase, string> = {
  intro: 'Start Lesson',
  teaching: "It's my turn",
  listening: 'Finish Lesson',
  completed: '',
};

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const lesson = id ? getLessonById(id) : null;
  const language = lesson ? languages.find((l) => l.id === lesson.languageId) : null;

  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [phase, setPhase] = useState<SessionPhase>('intro');
  const [sessionSeconds, setSessionSeconds] = useState(0);

  const pulseAnim = useRef(new Animated.Value(1)).current;
  const pulseOpacity = useRef(new Animated.Value(0.65)).current;

  useEffect(() => {
    const timer = setInterval(() => setSessionSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(pulseAnim, {
            toValue: 1.22,
            duration: 950,
            useNativeDriver: true,
          }),
          Animated.timing(pulseOpacity, {
            toValue: 0,
            duration: 950,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 0,
            useNativeDriver: true,
          }),
          Animated.timing(pulseOpacity, {
            toValue: 0.65,
            duration: 0,
            useNativeDriver: true,
          }),
        ]),
      ])
    );
    pulse.start();
    return () => pulse.stop();
  }, [pulseAnim, pulseOpacity]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  function advancePhase() {
    const order: SessionPhase[] = ['intro', 'teaching', 'listening', 'completed'];
    const idx = order.indexOf(phase);
    if (idx < order.length - 1) setPhase(order[idx + 1]);
  }

  if (!lesson) {
    return (
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View className="flex-1 items-center justify-center px-8" style={{ gap: 16 }}>
          <Ionicons name="alert-circle-outline" size={48} color="rgba(255,255,255,0.4)" />
          <Text style={styles.notFoundText}>Lesson not found</Text>
          <TouchableOpacity style={styles.backFallbackBtn} onPress={() => router.back()}>
            <Text style={styles.backFallbackBtnText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const aiActivity = lesson.activities.find((a) => a.type === 'ai-teacher') as
    | { type: 'ai-teacher'; topic: string; prompt: string }
    | undefined;
  const phrases = lesson.activities.filter((a) => a.type === 'phrase') as PhraseActivity[];
  const statusColor = PHASE_STATUS_COLOR[phase];

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      {/* ── Top bar ──────────────────────────────────────────────── */}
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => router.back()}
          hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
          style={styles.closeBtn}
        >
          <Ionicons name="close" size={20} color="rgba(255,255,255,0.75)" />
        </TouchableOpacity>

        <View className="flex-1 items-center" style={{ gap: 3 }}>
          <Text style={styles.topBarTitle} numberOfLines={1}>
            {lesson.title}
          </Text>
          {language && (
            <View className="flex-row items-center" style={{ gap: 6 }}>
              <Image
                source={{ uri: language.flag }}
                style={styles.flagImg}
                resizeMode="cover"
              />
              <Text style={styles.topBarLang}>{language.name}</Text>
            </View>
          )}
        </View>

        <View style={styles.timerPill}>
          <Ionicons name="time-outline" size={12} color="rgba(255,255,255,0.5)" />
          <Text style={styles.timerText}>{formatTime(sessionSeconds)}</Text>
        </View>
      </View>

      {/* ── Scrollable content ───────────────────────────────────── */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 pb-4"
      >
        {/* Teacher avatar */}
        <View className="items-center" style={{ marginTop: 28, marginBottom: 18 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Animated.View
              style={[
                styles.pulseRing,
                { transform: [{ scale: pulseAnim }], opacity: pulseOpacity },
              ]}
            />
            <View style={styles.avatarCircle}>
              <Image
                source={images.mascotLogo}
                style={styles.avatarImg}
                resizeMode="contain"
              />
            </View>
          </View>
          <Text style={styles.teacherName}>Susan</Text>
          <Text style={styles.teacherSub}>AI Language Teacher</Text>
          {language && (
            <Text style={styles.teacherSubLang}>Teaching {language.name}</Text>
          )}
        </View>

        {/* Session status badge */}
        <View className="items-center" style={{ marginBottom: 18 }}>
          <View style={[styles.statusBadge, { backgroundColor: statusColor + '22' }]}>
            <View style={[styles.statusDot, { backgroundColor: statusColor }]} />
            <Text style={[styles.statusLabel, { color: statusColor }]}>
              {PHASE_STATUS[phase]}
            </Text>
          </View>
        </View>

        {/* Teacher speech bubble */}
        {showSubtitles && (
          <View style={styles.speechBubble}>
            <Text style={styles.speechText}>{TEACHER_MESSAGES[phase]}</Text>
            {aiActivity && phase === 'intro' && (
              <View style={styles.topicRow}>
                <Ionicons name="book-outline" size={13} color={colors.linguaPurple} />
                <Text style={styles.topicText}>Today: {aiActivity.topic}</Text>
              </View>
            )}
          </View>
        )}

        {/* Lesson goals */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={[styles.cardIconWrap, { backgroundColor: 'rgba(108,78,245,0.2)' }]}>
              <Ionicons name="flag" size={14} color={colors.linguaPurple} />
            </View>
            <Text style={styles.cardTitle}>Lesson Goals</Text>
          </View>
          {lesson.goals.map((goal, i) => (
            <View key={i} style={styles.goalRow}>
              <View style={styles.goalBullet}>
                <Ionicons name="checkmark" size={11} color={colors.linguaPurple} />
              </View>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </View>

        {/* Key phrases */}
        {phrases.length > 0 && (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={[styles.cardIconWrap, { backgroundColor: 'rgba(77,136,255,0.2)' }]}>
                <Ionicons name="chatbubble-ellipses" size={13} color={colors.linguaBlue} />
              </View>
              <Text style={styles.cardTitle}>Key Phrases</Text>
            </View>
            {phrases.map((act, i) => (
              <View
                key={i}
                style={[
                  styles.phraseRow,
                  i === 0 && { borderTopWidth: 0 },
                ]}
              >
                <View className="flex-1" style={{ gap: 2 }}>
                  <Text style={styles.phraseTarget}>{act.phrase.phrase}</Text>
                  <Text style={styles.phraseTranslation}>{act.phrase.translation}</Text>
                </View>
                {act.phrase.pronunciation && (
                  <View style={styles.pronBadge}>
                    <Ionicons name="volume-medium-outline" size={12} color={colors.linguaBlue} />
                    <Text style={styles.pronText}>{act.phrase.pronunciation}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Phase advance button */}
        {phase !== 'completed' ? (
          <TouchableOpacity
            style={styles.advanceBtn}
            onPress={advancePhase}
            activeOpacity={0.85}
          >
            <Text style={styles.advanceBtnText}>{PHASE_BTN_LABEL[phase]}</Text>
            <Ionicons name="arrow-forward" size={16} color={colors.white} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.advanceBtn, { backgroundColor: colors.linguaGreen }]}
            onPress={() => router.back()}
            activeOpacity={0.85}
          >
            <Ionicons name="checkmark-circle" size={18} color={colors.white} />
            <Text style={styles.advanceBtnText}>Complete Lesson</Text>
          </TouchableOpacity>
        )}
      </ScrollView>

      {/* ── Bottom controls ──────────────────────────────────────── */}
      <View style={styles.controlsBar}>
        {/* Camera */}
        <View style={styles.controlItem}>
          <TouchableOpacity
            style={[styles.controlBtn, isCameraOn && styles.controlBtnActive]}
            onPress={() => setIsCameraOn((v) => !v)}
            activeOpacity={0.75}
          >
            <Ionicons
              name={isCameraOn ? 'videocam' : 'videocam-off'}
              size={22}
              color={isCameraOn ? colors.linguaBlue : 'rgba(255,255,255,0.75)'}
            />
          </TouchableOpacity>
          <Text style={styles.controlLabel}>Camera</Text>
        </View>

        {/* Mic */}
        <View style={styles.controlItem}>
          <TouchableOpacity
            style={[styles.controlBtn, isMicOn && styles.controlBtnActive]}
            onPress={() => setIsMicOn((v) => !v)}
            activeOpacity={0.75}
          >
            <Ionicons
              name={isMicOn ? 'mic' : 'mic-off'}
              size={22}
              color={isMicOn ? colors.linguaGreen : 'rgba(255,255,255,0.75)'}
            />
          </TouchableOpacity>
          <Text style={styles.controlLabel}>Mic</Text>
        </View>

        {/* Subtitles */}
        <View style={styles.controlItem}>
          <TouchableOpacity
            style={[styles.controlBtn, showSubtitles && styles.controlBtnActive]}
            onPress={() => setShowSubtitles((v) => !v)}
            activeOpacity={0.75}
          >
            <Ionicons
              name={showSubtitles ? 'document-text' : 'document-text-outline'}
              size={22}
              color={showSubtitles ? colors.linguaPurple : 'rgba(255,255,255,0.75)'}
            />
          </TouchableOpacity>
          <Text style={styles.controlLabel}>Subtitles</Text>
        </View>

        {/* End Call */}
        <View style={styles.controlItem}>
          <TouchableOpacity
            style={styles.endCallBtn}
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <View style={{ transform: [{ rotate: '135deg' }] }}>
              <Ionicons name="call" size={22} color={colors.white} />
            </View>
          </TouchableOpacity>
          <Text style={styles.controlLabel}>End Call</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0D0828',
  },

  // Top bar
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 14,
    gap: 12,
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: colors.white,
    textAlign: 'center',
  },
  topBarLang: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: 'rgba(255,255,255,0.5)',
  },
  flagImg: {
    width: 18,
    height: 12,
    borderRadius: 2,
  },
  timerPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  timerText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: 'rgba(255,255,255,0.55)',
  },

  // Teacher avatar
  pulseRing: {
    position: 'absolute',
    width: 144,
    height: 144,
    borderRadius: 72,
    borderWidth: 2,
    borderColor: colors.linguaPurple,
  },
  avatarCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(108,78,245,0.2)',
    borderWidth: 2.5,
    borderColor: colors.linguaPurple,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatarImg: {
    width: 104,
    height: 104,
  },
  teacherName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: colors.white,
    marginTop: 14,
  },
  teacherSub: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: 'rgba(255,255,255,0.55)',
    marginTop: 2,
  },
  teacherSubLang: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: 'rgba(255,255,255,0.35)',
    marginTop: 1,
  },

  // Status badge
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
  statusLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },

  // Speech bubble
  speechBubble: {
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    gap: 8,
  },
  speechText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'rgba(255,255,255,0.82)',
    lineHeight: 22,
  },
  topicRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  topicText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: colors.linguaPurple,
  },

  // Cards
  card: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    gap: 0,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  cardIconWrap: {
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: 'rgba(255,255,255,0.88)',
  },

  // Goals
  goalRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 8,
  },
  goalBullet: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: 'rgba(108,78,245,0.22)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    flexShrink: 0,
  },
  goalText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: 'rgba(255,255,255,0.68)',
    flex: 1,
    lineHeight: 20,
  },

  // Phrases
  phraseRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.07)',
  },
  phraseTarget: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: colors.white,
  },
  phraseTranslation: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: 'rgba(255,255,255,0.45)',
  },
  pronBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(77,136,255,0.15)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    flexShrink: 0,
    marginTop: 2,
  },
  pronText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: colors.linguaBlue,
  },

  // Phase advance button
  advanceBtn: {
    backgroundColor: colors.linguaPurple,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
    marginBottom: 4,
  },
  advanceBtnText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: colors.white,
  },

  // Bottom controls
  controlsBar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    paddingTop: 18,
    paddingBottom: 14,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.07)',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  controlItem: {
    alignItems: 'center',
    gap: 8,
  },
  controlBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlBtnActive: {
    backgroundColor: 'rgba(255,255,255,0.22)',
  },
  controlLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
  },
  endCallBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.error,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.error,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius: 8,
    elevation: 6,
  },

  // Not found fallback
  notFoundText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
  },
  backFallbackBtn: {
    backgroundColor: colors.linguaPurple,
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  backFallbackBtnText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: colors.white,
  },
});
