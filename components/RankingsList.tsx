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
      <View style={[styles.rankIcon, styles.goldMedal]}>
        <IconSymbol name="medal.fill" size={28} color="#FFD700" />
        <Text style={styles.rankNumber}>1</Text>
      </View>
    );
  }
  if (rank === 2) {
    return (
      <View style={[styles.rankIcon, styles.silverMedal]}>
        <IconSymbol name="medal.fill" size={28} color="#C0C0C0" />
        <Text style={styles.rankNumber}>2</Text>
      </View>
    );
  }
  if (rank === 3) {
    return (
      <View style={[styles.rankIcon, styles.bronzeMedal]}>
        <IconSymbol name="medal.fill" size={28} color="#CD7F32" />
        <Text style={styles.rankNumber}>3</Text>
      </View>
    );
  }
  return (
    <View style={[styles.rankIcon, styles.numberRank]}>
      <Text style={styles.rankNumberText}>{rank}</Text>
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
  return <View style={styles.neutralTrend} />;
}

export default function RankingsList({ outlets }: RankingsListProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Outlets</Text>
        <View style={styles.sortIndicator}>
          <Text style={styles.sortText}>↓↑ Followers</Text>
        </View>
      </View>
      <ScrollView style={styles.list}>
        {outlets.map((outlet) => (
          <View key={outlet.id} style={styles.outletItem}>
            <RankIcon rank={outlet.rank} />
            <View style={styles.logoContainer}>
              <View style={styles.logo}>
                <Text style={styles.logoText}>{outlet.logo}</Text>
              </View>
            </View>
            <View style={styles.outletInfo}>
              <Text style={styles.outletName}>{outlet.name}</Text>
              <Text style={styles.followers}>{outlet.followers} followers</Text>
            </View>
            <TouchableOpacity style={styles.followButton} activeOpacity={0.7}>
              <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
            <TrendIndicator trend={outlet.trend} />
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
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  sortIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    fontSize: 14,
    color: '#666666',
  },
  list: {
    flex: 1,
  },
  outletItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  rankIcon: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  goldMedal: {
    // Gold medal styling
  },
  silverMedal: {
    // Silver medal styling
  },
  bronzeMedal: {
    // Bronze medal styling
  },
  numberRank: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rankNumber: {
    position: 'absolute',
    fontSize: 13,
    fontWeight: '800',
    color: '#FFFFFF',
    top: 8,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  rankNumberText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666666',
  },
  logoContainer: {
    marginRight: 4,
  },
  logo: {
    width: 48,
    height: 48,
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
  outletInfo: {
    flex: 1,
  },
  outletName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
  },
  followers: {
    fontSize: 13,
    color: '#666666',
  },
  followButton: {
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  followButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
  neutralTrend: {
    width: 16,
    height: 2,
    backgroundColor: '#CCCCCC',
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

