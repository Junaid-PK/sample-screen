import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconSymbol } from './ui/icon-symbol';

interface TopNavigationBarProps {
  activeTab: 'news' | 'rankings';
  onTabChange: (tab: 'news' | 'rankings') => void;
  onClose?: () => void;
}

export default function TopNavigationBar({
  activeTab,
  onTabChange,
  onClose,
}: TopNavigationBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => onTabChange('news')}
          activeOpacity={0.7}>
          <View style={styles.tabContent}>
            <Text style={[styles.tabText, activeTab === 'news' && styles.activeTabText]}>
              News
            </Text>
            {activeTab === 'news' && <View style={styles.redDot} />}
          </View>
          {activeTab === 'news' && <View style={styles.underline} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => onTabChange('rankings')}
          activeOpacity={0.7}>
          <View style={styles.tabContent}>
            <Text style={[styles.tabText, activeTab === 'rankings' && styles.activeTabText]}>
              Rankings
            </Text>
            {activeTab === 'rankings' && <View style={styles.redDot} />}
          </View>
          {activeTab === 'rankings' && <View style={styles.underline} />}
        </TouchableOpacity>
      </View>
      {onClose && (
        <TouchableOpacity onPress={onClose} style={styles.closeButton} activeOpacity={0.7}>
          <IconSymbol name="xmark" size={24} color="#000000" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
  },
  tabs: {
    flexDirection: 'row',
    gap: 24,
  },
  tab: {
    position: 'relative',
  },
  tabContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#666666',
  },
  activeTabText: {
    color: '#000000',
    fontWeight: '500',
  },
  redDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF0000',
  },
  underline: {
    position: 'absolute',
    bottom: -8,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#FF0000',
  },
  closeButton: {
    padding: 4,
  },
});

