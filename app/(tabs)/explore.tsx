import AdvertisementBanner from '@/components/AdvertisementBanner';
import BottomNavigationBar from '@/components/BottomNavigationBar';
import RankingsList from '@/components/RankingsList';
import TopNavigationBar from '@/components/TopNavigationBar';
import { rankingOutlets } from '@/constants/data';
import { useRouter, usePathname } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RankingsScreen() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<'news' | 'rankings'>('rankings');

  useEffect(() => {
    // Sync activeTab with current route
    if (pathname?.includes('explore')) {
      setActiveTab('rankings');
    } else {
      setActiveTab('news');
    }
  }, [pathname]);

  const handleTabChange = (tab: 'news' | 'rankings') => {
    if (tab === 'news') {
      router.push('/(tabs)/');
    } else {
      router.push('/(tabs)/explore');
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <TopNavigationBar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onClose={() => router.back()}
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <AdvertisementBanner />
        <RankingsList outlets={rankingOutlets} />
      </ScrollView>
      <BottomNavigationBar activeTab="list" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80,
  },
});
