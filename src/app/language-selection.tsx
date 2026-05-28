import { languages } from '@/data/languages';
import { useLearningStore } from '@/store/learning';
import { ScrollView, Text, View } from '@/tw';
import type { Language } from '@/types/learning';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Image as RNImage,
  Pressable as RNPressable,
  TextInput as RNTextInput,
  View as RNView,
  StyleSheet,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePostHog } from 'posthog-react-native';

export default function LanguageSelectionScreen() {
  const router = useRouter();
  const posthog = usePostHog();
  const insets = useSafeAreaInsets();
  const selectedLanguage = useLearningStore((s) => s.selectedLanguage);
  const setSelectedLanguage = useLearningStore((s) => s.setSelectedLanguage);
  const [selectedId, setSelectedId] = useState<string | null>(selectedLanguage?.id ?? null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setSelectedId(selectedLanguage?.id ?? null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLanguage?.id]);

  const filtered = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase()) ||
    lang.nativeName.toLowerCase().includes(search.toLowerCase())
  );

  const selectedLang = languages.find((l) => l.id === selectedId);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      {/* Header */}
      <View className="flex-row items-center px-5 pt-2 pb-3">
        {selectedLanguage ? (
          <RNPressable onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backArrow}>‹</Text>
          </RNPressable>
        ) : (
          <RNView style={styles.backBtn} />
        )}
        <Text className="flex-1 text-center h3">Choose a language</Text>
        <RNView style={styles.backBtn} />
      </View>

      {/* Search bar */}
      <RNView style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <RNTextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search languages"
          placeholderTextColor="#9ca3af"
          style={styles.searchInput}
        />
      </RNView>

      {/* Language list */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-4 pt-3 pb-4"
      >
        {search.trim().length === 0 ? (
          <Text className="h4 mb-3">Popular</Text>
        ) : (
          <Text className="h4 mb-3">Languages</Text>
        )}

        {filtered.map((lang: Language) => {
          const isSelected = selectedId === lang.id;
          return (
            <RNPressable
              key={lang.id}
              onPress={() => setSelectedId(isSelected ? null : lang.id)}
              style={[styles.langRow, isSelected && styles.langRowSelected]}
            >
              <RNView style={styles.flagWrapper}>
                <RNImage
                  source={{ uri: lang.flag }}
                  style={styles.flagImage}
                  resizeMode="cover"
                />
              </RNView>

              <View className="flex-1 ml-3">
                <Text className="h4">{lang.name}</Text>
                {lang.learnerCount && (
                  <Text className="body-sm text-text-secondary">
                    {lang.learnerCount} learners
                  </Text>
                )}
              </View>

              {isSelected ? (
                <RNView style={styles.checkCircle}>
                  <Text style={styles.checkMark}>✓</Text>
                </RNView>
              ) : (
                <Text style={styles.chevron}>›</Text>
              )}
            </RNPressable>
          );
        })}
      </ScrollView>

      {/* Confirm button */}
      <RNView style={[styles.btnWrapper, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        <RNPressable
          style={[styles.confirmBtn, !selectedId && styles.btnDisabled]}
          disabled={!selectedId}
          onPress={() => {
            if (selectedLang) {
              setSelectedLanguage(selectedLang);
              posthog.capture('language_selected', {
                language_id: selectedLang.id,
                language_name: selectedLang.name,
              });
            }
            router.replace('/');
          }}
        >
          <Text style={styles.confirmBtnText}>
            {selectedLang ? `Continue with ${selectedLang.name}` : 'Select a language'}
          </Text>
        </RNPressable>
      </RNView>
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
    marginHorizontal: 16,
    marginBottom: 4,
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
    width: 44,
    height: 44,
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
  btnWrapper: {
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: '#ffffff',
  },
  confirmBtn: {
    backgroundColor: '#6c4ef5',
    borderRadius: 16,
    paddingVertical: 16,
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
});
