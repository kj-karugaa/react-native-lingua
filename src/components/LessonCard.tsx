import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image } from '@/tw';
import { colors } from '@/theme/colors';
import type { Lesson } from '@/types/learning';

export type LessonStatus = 'completed' | 'in-progress' | 'upcoming';

interface LessonCardProps {
  lesson: Lesson;
  index: number;
  status: LessonStatus;
  onPress: () => void;
}

export function LessonCard({ lesson, index, status, onPress }: LessonCardProps) {
  const thumbnail = lesson.image ?? `https://picsum.photos/seed/${lesson.id}/300/300`;

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.75}
        style={[
          styles.container,
          status === 'in-progress' && styles.containerActive,
        ]}
      >
        <View className="flex-row items-center" style={{ gap: 12 }}>
          {/* Left content */}
          <View className="flex-1" style={{ gap: 3 }}>
            <Text className="caption">Lesson {index + 1}</Text>
            <Text className="h4" numberOfLines={2}>
              {lesson.title}
            </Text>
            {status === 'in-progress' ? (
              <Text style={styles.inProgressLabel}>In progress</Text>
            ) : (
              <Text className="body-sm text-text-secondary">
                {lesson.activities.length} activities
              </Text>
            )}
          </View>

          {/* Right indicator */}
          {status === 'completed' && (
            <View style={styles.checkCircle}>
              <Ionicons name="checkmark" size={18} color={colors.white} />
            </View>
          )}
          {status === 'in-progress' && (
            <Image
              source={{ uri: thumbnail }}
              style={styles.thumbnail}
              resizeMode="cover"
            />
          )}
          {status === 'upcoming' && (
            <View style={styles.upcomingCircle}>
              <Ionicons name="chevron-forward" size={14} color={colors.inkLight} />
            </View>
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.divider} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  containerActive: {
    backgroundColor: '#F5F3FF',
  },
  inProgressLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: colors.linguaGreen,
  },
  checkCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.linguaGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  upcomingCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: colors.stroke,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.stroke,
    marginHorizontal: 20,
  },
});
