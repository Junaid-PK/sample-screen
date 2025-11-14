import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconSymbol } from './ui/icon-symbol';

interface BottomNavigationBarProps {
  activeTab?: string;
}

export default function BottomNavigationBar({ activeTab }: BottomNavigationBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.countryCode}>961</Text>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <View style={[styles.iconContainer, activeTab === 'list' && styles.activeIconContainer]}>
            <View style={[styles.listIcon, activeTab === 'list' && styles.activeListIcon]}>
              <IconSymbol name="list.bullet" size={20} color={activeTab === 'list' ? '#FFFFFF' : '#666666'} />
            </View>
          </View>
          {activeTab === 'list' && <Text style={styles.navLabel}>List</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <IconSymbol name="bubble.left.and.bubble.right" size={24} color="#666666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <IconSymbol name="chart.line.uptrend.xyaxis" size={24} color="#666666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} activeOpacity={0.7}>
          <View style={styles.plusButton}>
            <Text style={styles.plusText}>plus</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingBottom: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  countryCode: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '500',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 40,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  listIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#E0E0E0',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeListIcon: {
    backgroundColor: '#FF0000',
  },
  navLabel: {
    fontSize: 10,
    color: '#FF0000',
    marginTop: 2,
  },
  plusButton: {
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  plusText: {
    fontSize: 12,
    color: '#000000',
    fontWeight: '500',
  },
});

