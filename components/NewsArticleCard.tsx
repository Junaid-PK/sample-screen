import { NewsArticle } from '@/constants/data';
import { Image as ExpoImage } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface NewsArticleCardProps {
  article: NewsArticle;
}

export default function NewsArticleCard({ article }: NewsArticleCardProps) {
  return (
    <View style={styles.wrapper}>
      {/* Main Card Container */}
      <View style={[styles.cardContainer, article.isBreaking && styles.cardContainerWithBadge]}>
        {article.isBreaking && (
          <View style={styles.breakingBadge}>
            <Text style={styles.breakingText}>BREAKING</Text>
          </View>
        )}
        <Text style={styles.articleText}>{article.text}</Text>
      </View>

      {/* Engagement Bar - Below the card */}
      <View style={styles.engagementBar}>
        {/* Time Section - Left side */}
        <View style={styles.timeSection}>
          <View style={styles.timeRow}>
            <Text style={styles.timestamp}>{article.timestamp}</Text>
            <View style={styles.semiCircleIconsContainer}>
              <TouchableOpacity style={styles.semiCircleIcon} activeOpacity={0.7}>
                <ExpoImage
                  source={require('@/assets/images/emoji-icon.png')}
                  style={styles.semiCircleIconImage}
                  contentFit="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.semiCircleIcon} activeOpacity={0.7}>
                <ExpoImage
                  source={require('@/assets/images/message-icon.png')}
                  style={styles.semiCircleIconImage}
                  contentFit="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Share Icon - Right side, overlapping card */}
        <TouchableOpacity style={styles.shareIconContainer} activeOpacity={0.7}>
          <ExpoImage
            source={require('@/assets/images/share-icon.png')}
            style={styles.shareIconImage}
            contentFit="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 16,
    marginBottom: 20,
    position: 'relative',
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  breakingBadge: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#FF0000',
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 5,
    zIndex: 1,
  },
  breakingText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
    lineHeight: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  cardContainerWithBadge: {
    paddingTop: 28,
  },
  articleText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#000000',
    marginTop: 0,
  },
  engagementBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 8,
    paddingLeft: 0,
    marginTop: 0,
    position: 'relative',
  },
  timeSection: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  timestamp: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    color: '#999999',
    letterSpacing: -0.0167,
  },
  semiCircleIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  semiCircleIcon: {
    width: 28,
    height: 14,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  semiCircleIconImage: {
    width: 16,
    height: 16,
    marginTop: 1,
  },
  shareIconContainer: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    paddingVertical: 4,
    position: 'absolute',
    right: 8,
    top: -17.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  shareIconImage: {
    width: 20,
    height: 20,
  },
});
