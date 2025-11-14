import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconSymbol } from './ui/icon-symbol';

interface ProfileHeaderProps {
  logo: string;
  logoColor: string;
  name: string;
  followers: string;
  onMenuPress?: () => void;
}

export default function ProfileHeader({
  logo,
  logoColor,
  name,
  followers,
  onMenuPress,
}: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.logoCircle, { backgroundColor: logoColor }]}>
        <Text style={styles.logoText}>{logo}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.followers}>{followers} followers</Text>
      </View>
      <TouchableOpacity onPress={onMenuPress} style={styles.menuButton} activeOpacity={0.7}>
        <IconSymbol name="ellipsis" size={20} color="#000000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  logoCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
  },
  followers: {
    fontSize: 14,
    color: '#666666',
  },
  menuButton: {
    padding: 4,
  },
});

