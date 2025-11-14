import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface AdvertisementBannerProps {
  height?: number;
}

export default function AdvertisementBanner({ height = 180 }: AdvertisementBannerProps) {
  return (
    <View style={[styles.container, { minHeight: height }]}>
      <Image
        source={require('@/assets/images/ad-banner.png')}
        style={[styles.image, { height }]}
        contentFit="cover"
      />
      <View style={styles.adLabel}>
        <Text style={styles.adLabelText}>AD</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 12,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    borderRadius: 12,
  },
  adLabel: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    zIndex: 10,
  },
  adLabelText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
  },
});

