import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AdvertisementBanner() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/ad-banner.png')}
        style={styles.image}
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
    minHeight: 180,
  },
  image: {
    width: '100%',
    height: 180,
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

