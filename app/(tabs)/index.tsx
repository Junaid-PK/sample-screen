import AdvertisementBanner from '@/components/AdvertisementBanner';
import BottomNavigationBar from '@/components/BottomNavigationBar';
import ContentSourceScrollbar from '@/components/ContentSourceScrollbar';
import NewsArticleCard from '@/components/NewsArticleCard';
import ProfileHeader from '@/components/ProfileHeader';
import TopNavigationBar from '@/components/TopNavigationBar';
import { contentSources, newsArticles } from '@/constants/data';
import { usePathname, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NewsScreen() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<'news' | 'rankings'>('news');

  useEffect(() => {
    // Sync activeTab with current route
    if (pathname?.includes('explore')) {
      setActiveTab('rankings');
    } else {
      setActiveTab('news');
    }
  }, [pathname]);

  const handleTabChange = (tab: 'news' | 'rankings') => {
    if (tab === 'rankings') {
      router.push('/(tabs)/explore');
    }
    // If already on news tab, no need to navigate
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
        <ContentSourceScrollbar sources={contentSources} />
        <ProfileHeader
          logo="mtv"
          logoColor="#0066CC"
          name="MTV News"
          followers="1.2M"
          onMenuPress={() => {}}
        />
        <AdvertisementBanner />
        {newsArticles.map((article) => (
          <NewsArticleCard key={article.id} article={article} />
        ))}
        <AdvertisementBanner />
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
