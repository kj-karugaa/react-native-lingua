import { useState, useEffect, useRef } from 'react';
import {
  Modal,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput as RNTextInput,
  Pressable as RNPressable,
} from 'react-native';
import { useRouter } from 'expo-router';
import { View, Text, Pressable } from '@/tw';

interface Props {
  visible: boolean;
  email: string;
  onClose: () => void;
}

export default function VerificationModal({ visible, email, onClose }: Props) {
  const router = useRouter();
  const [code, setCode] = useState('');
  const inputRef = useRef<RNTextInput>(null);

  useEffect(() => {
    if (visible) {
      setCode('');
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const handleCodeChange = (text: string) => {
    const digits = text.replace(/[^0-9]/g, '').slice(0, 6);
    setCode(digits);
    if (digits.length === 6) {
      setTimeout(() => {
        onClose();
        router.replace('/');
      }, 300);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.overlay}
      >
        {/* Backdrop */}
        <RNPressable style={styles.backdrop} onPress={onClose} />

        {/* Sheet */}
        <View style={styles.sheet}>
          {/* Email icon */}
          <View className="items-center mb-4">
            <Text style={styles.emailIcon}>📧</Text>
          </View>

          {/* Title */}
          <Text className="h2 text-center mb-2">Check your email</Text>
          <Text className="body-md text-text-secondary text-center mb-8">
            We sent a 6-digit code to{'\n'}
            <Text className="body-md font-poppins-semibold text-text-primary">
              {email || 'your email'}
            </Text>
          </Text>

          {/* Digit boxes + hidden input */}
          <RNPressable
            style={styles.digitsContainer}
            onPress={() => inputRef.current?.focus()}
          >
            <View className="flex-row justify-center gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.digitBox,
                    code[i] !== undefined && styles.digitBoxFilled,
                    i === code.length && styles.digitBoxActive,
                  ]}
                >
                  <Text style={styles.digitText}>{code[i] ?? ''}</Text>
                </View>
              ))}
            </View>

            {/* Hidden input that captures keystrokes */}
            <RNTextInput
              ref={inputRef}
              value={code}
              onChangeText={handleCodeChange}
              keyboardType="number-pad"
              maxLength={6}
              style={styles.hiddenInput}
              caretHidden
            />
          </RNPressable>

          {/* Resend */}
          <View className="flex-row justify-center mt-6">
            <Text className="body-sm text-text-secondary">Didn't receive code? </Text>
            <Pressable>
              <Text className="body-sm text-lingua-purple font-poppins-semibold">Resend</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  sheet: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 12,
  },
  emailIcon: {
    fontSize: 44,
  },
  digitsContainer: {
    position: 'relative',
  },
  digitBox: {
    width: 46,
    height: 56,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#e5e7eb',
    backgroundColor: '#f6f7fb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  digitBoxFilled: {
    backgroundColor: '#ffffff',
    borderColor: '#6c4ef5',
  },
  digitBoxActive: {
    borderColor: '#6c4ef5',
    borderWidth: 2,
    backgroundColor: '#ffffff',
  },
  digitText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: '#001328',
  },
  hiddenInput: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
  },
});
