import { Ionicons } from '@expo/vector-icons';
import { Pressable, View, Text } from '@/tw';

interface Props {
  iconName: React.ComponentProps<typeof Ionicons>['name'];
  label: string;
  iconColor: string;
  onPress?: () => void;
  disabled?: boolean;
}

export default function SocialButton({ iconName, label, iconColor, onPress, disabled }: Props) {
  return (
    <Pressable
      className="flex-row items-center justify-center border-[1.5px] border-border rounded-[16px] py-[14px] bg-white"
      onPress={onPress}
      disabled={disabled}
      style={{ opacity: disabled ? 0.6 : 1 }}
    >
      <View className="w-6 items-center">
        <Ionicons name={iconName} size={22} color={iconColor} />
      </View>
      <Text className="flex-1 text-center body-md font-poppins-medium text-text-primary">
        {label}
      </Text>
    </Pressable>
  );
}
