import { RankingOutlet } from '@/constants/data';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconSymbol } from './ui/icon-symbol';

interface RankingsListProps {
  outlets: RankingOutlet[];
}

function RankIcon({ rank }: { rank: number }) {
  if (rank === 1) {
    return (
      <View style={styles.rankIconContainer}>
        <IconSymbol name="medal.fill" size={24} color="#FFD700" />
        <Text style={styles.medalRankNumber}>1</Text>
      </View>
    );
  }
  if (rank === 2) {
    return (
      <View style={styles.rankIconContainer}>
        <IconSymbol name="medal.fill" size={24} color="#C0C0C0" />
        <Text style={styles.medalRankNumber}>2</Text>
      </View>
    );
  }
  if (rank === 3) {
    return (
      <View style={styles.rankIconContainer}>
        <IconSymbol name="medal.fill" size={24} color="#CD7F32" />
        <Text style={styles.medalRankNumber}>3</Text>
      </View>
    );
  }
  return (
    <View style={styles.numberRankContainer}>
      <Text style={styles.numberRankText}>{rank}</Text>
    </View>
  );
}

function TrendIndicator({ trend }: { trend: 'up' | 'down' | 'neutral' }) {
  if (trend === 'up') {
    return <IconSymbol name="arrow.up" size={16} color="#00C853" />;
  }
  if (trend === 'down') {
    return <IconSymbol name="arrow.down" size={16} color="#FF0000" />;
  }
  return <IconSymbol name="minus" size={16} color="#CCCCCC" />;
}

export default function RankingsList({ outlets }: RankingsListProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Outlets</Text>
        <TouchableOpacity style={styles.sortButton} activeOpacity={0.7}>
          <IconSymbol name="chevron.up" size={18} color="#455468" />
          <Text style={styles.sortText}>Followers</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
        {outlets.map((outlet) => (
          <View key={outlet.id} style={styles.outletItem}>
            <RankIcon rank={outlet.rank} />
            <View style={styles.channelContainer}>
              <View style={styles.logoContainer}>
                <View style={styles.logo}>
                  <Text style={styles.logoText}>{outlet.logo}</Text>
                </View>
              </View>
              <View style={styles.channelInfo}>
                <Text style={styles.outletName}>{outlet.name}</Text>
                <Text style={styles.followers}>{outlet.followers} followers</Text>
              </View>
              <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.followButton} activeOpacity={0.7}>
                  <Text style={styles.followButtonText}>Follow</Text>
                </TouchableOpacity>
                <TrendIndicator trend={outlet.trend} />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.viewMore} activeOpacity={0.7}>
        <Text style={styles.viewMoreText}>View more</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    lineHeight: 16,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  sortText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#455468',
    lineHeight: 20,
    letterSpacing: -0.0143,
  },
  list: {
    flex: 1,
  },
  outletItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: 'stretch',
  },
  rankIconContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  medalRankNumber: {
    position: 'absolute',
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    lineHeight: 15,
    top: 4,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  numberRankContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberRankText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666666',
    lineHeight: 15,
    textAlign: 'center',
  },
  channelContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 9,
    paddingRight: 9,
    paddingLeft: 0,
  },
  logoContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    backgroundColor: '#FF0000',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  channelInfo: {
    flex: 1,
    flexDirection: 'column',
  },
  outletName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111827',
    lineHeight: 20,
    marginBottom: 0,
  },
  followers: {
    fontSize: 12,
    fontWeight: '400',
    color: '#0F172A',
    lineHeight: 16,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  followButton: {
    backgroundColor: 'rgba(14, 15, 17, 0.04)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 9999,
  },
  followButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#455468',
    lineHeight: 20,
    letterSpacing: -0.0143,
  },
  viewMore: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  viewMoreText: {
    fontSize: 14,
    color: '#0066CC',
    fontWeight: '500',
  },
});
