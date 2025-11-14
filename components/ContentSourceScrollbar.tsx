import { ContentSource } from '@/constants/data';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

interface ContentSourceScrollbarProps {
  sources: ContentSource[];
}

export default function ContentSourceScrollbar({ sources }: ContentSourceScrollbarProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      style={styles.scrollView}>
      {sources.map((source) => (
        <View key={source.id} style={styles.sourceContainer}>
          <View
            style={[
              styles.logoCircle,
              { backgroundColor: source.color },
              source.logo === 'discord' && styles.discordLogo,
            ]}>
            {source.logo === 'discord' ? (
              <View style={styles.discordIcon} />
            ) : (
              <Text style={styles.logoText}>{source.logo}</Text>
            )}
          </View>
          {source.hasNotification && <View style={styles.notificationDot} />}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: 80,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 16,
  },
  sourceContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  discordLogo: {
    backgroundColor: '#5865F2',
  },
  discordIcon: {
    width: 28,
    height: 28,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    // This is a simplified representation - in a real app you'd use an actual Discord icon
    // Using a simple white square as placeholder
  },
  notificationDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FF0000',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
});

