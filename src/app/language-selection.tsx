import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { View, Text, Pressable, ScrollView, Image } from '@/tw';
import { TextInput as RNTextInput } from 'react-native';
import { languages } from '@/data/languages';
import { images } from '@/constants/images';
import type { Language } from '@/types/learning';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const EARTH_SIZE = SCREEN_WIDTH * 0.55;

export default function LanguageSelectionScreen() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filtered = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase()) ||
    lang.nativeName.toLowerCase().includes(search.toLowerCase())
  );

  const selectedLang = languages.find((l) => l.id === selectedId);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View className="flex-row items-center px-5 pt-2 pb-3">
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backArrow}>‹</Text>
        </Pressable>
        <Text className="flex-1 text-center h3">
          Choose a language
        </Text>
        {/* spacer to balance the back button */}
        <View style={styles.backBtn} />
      </View>

      {/* Search bar */}
      <View className="px-4 mb-4">
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <RNTextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search languages"
            placeholderTextColor="#9ca3af"
            style={styles.searchInput}
          />
        </View>
      </View>

      {/* Language list */}
      <ScrollView
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-4"
      >
        <Text className="h4 mb-3">Popular</Text>

        {filtered.map((lang: Language) => {
          const isSelected = selectedId === lang.id;
          return (
            <Pressable
              key={lang.id}
              onPress={() => setSelectedId(isSelected ? null : lang.id)}
              style={[styles.langRow, isSelected && styles.langRowSelected]}
            >
              {/* Flag */}
              <View style={styles.flagWrapper}>
                <Image
                  source={{ uri: lang.flag }}
                  style={styles.flagImage}
                  resizeMode="cover"
                />
              </View>

              {/* Name + learner count */}
              <View className="flex-1 ml-3">
                <Text className="h4">{lang.name}</Text>
                {lang.learnerCount && (
                  <Text className="body-sm text-text-secondary">
                    {lang.learnerCount} learners
                  </Text>
                )}
              </View>

              {/* Checkmark or chevron */}
              {isSelected ? (
                <View style={styles.checkCircle}>
                  <Text style={styles.checkMark}>✓</Text>
                </View>
              ) : (
                <Text style={styles.chevron}>›</Text>
              )}
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Bottom: confirm button + earth illustration */}
      <View className="px-4 pt-2">
        <Pressable
          style={[styles.confirmBtn, !selectedId && styles.btnDisabled]}
          disabled={!selectedId}
          onPress={() => router.back()}
        >
          <Text style={styles.confirmBtnText}>
            {selectedLang ? `Continue with ${selectedLang.name}` : 'Select a language'}
          </Text>
        </Pressable>
      </View>

      {/* Earth illustration */}
      <View className="items-center overflow-hidden" style={styles.earthContainer}>
        <Image
          source={images.earth}
          style={styles.earthImage}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  backBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 32,
    color: '#001328',
    lineHeight: 36,
    fontFamily: 'Poppins-Regular',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f7fb',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 11,
  },
  searchIcon: {
    fontSize: 15,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#001328',
    padding: 0,
  },
  langRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1.5,
    borderColor: '#e5e7eb',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  langRowSelected: {
    borderColor: '#6c4ef5',
    borderWidth: 2,
    backgroundColor: '#f5f0ff',
  },
  flagWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: '#f6f7fb',
  },
  flagImage: {
    width: '100%',
    height: '100%',
  },
  checkCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#4d88ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMark: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    lineHeight: 18,
  },
  chevron: {
    fontSize: 22,
    color: '#6b7280',
    lineHeight: 24,
  },
  confirmBtn: {
    backgroundColor: '#6c4ef5',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmBtnText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  btnDisabled: {
    opacity: 0.45,
  },
  earthContainer: {
    height: EARTH_SIZE * 0.55,
    marginTop: 12,
  },
  earthImage: {
    width: EARTH_SIZE,
    height: EARTH_SIZE,
    opacity: 0.25,
  },
});
