import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AdvertisementBanner() {
  return (
    <View style={styles.container}>
      <View style={styles.adLabel}>
        <Text style={styles.adLabelText}>AD</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.leftSection}>
          <Text style={styles.slowBurger}>slow burger</Text>
          <Text style={styles.beLazy}>BE LAZY</Text>
          {/* Placeholder for image - in real app would use Image component */}
          <View style={styles.imagePlaceholder}>
            <View style={styles.carImage} />
          </View>
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity style={styles.payButton} activeOpacity={0.8}>
            <Text style={styles.payButtonText}>OMT Pay</Text>
          </TouchableOpacity>
          <Text style={styles.liveMore}>Live more.</Text>
          <View style={styles.downloadButtons}>
            <View style={styles.downloadButton}>
              <Text style={styles.downloadButtonText}>App Store</Text>
            </View>
            <View style={styles.downloadButton}>
              <Text style={styles.downloadButtonText}>Google Play</Text>
            </View>
          </View>
          <Text style={styles.downloadNow}>DOWNLOAD NOW</Text>
        </View>
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
    backgroundColor: '#FFD700',
    position: 'relative',
    minHeight: 200,
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
  content: {
    flexDirection: 'row',
    padding: 16,
  },
  leftSection: {
    flex: 1,
    position: 'relative',
  },
  slowBurger: {
    fontSize: 12,
    color: '#000000',
    marginBottom: 4,
    fontWeight: '500',
  },
  beLazy: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFD700',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginBottom: 8,
    letterSpacing: 1,
  },
  imagePlaceholder: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: '#FF6B6B',
    borderRadius: 8,
  },
  carImage: {
    flex: 1,
    backgroundColor: '#FF8C8C',
  },
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingLeft: 16,
  },
  payButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginBottom: 8,
  },
  payButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  liveMore: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 12,
    fontWeight: '500',
  },
  downloadButtons: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  downloadButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  downloadButtonText: {
    fontSize: 10,
    color: '#000000',
    fontWeight: '500',
  },
  downloadNow: {
    fontSize: 10,
    color: '#000000',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});

