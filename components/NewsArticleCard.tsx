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
      <View style={styles.container}>
        {article.isBreaking && (
          <View style={styles.breakingBadge}>
            <Text style={styles.breakingText}>BREAKING</Text>
          </View>
        )}
        <Text style={[styles.articleText, article.isBreaking && styles.articleTextWithBadge]}>
          {article.text}
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.leftSection}>
          <Text style={styles.timestamp}>{article.timestamp}</Text>
          <TouchableOpacity style={styles.smallIconCircle} activeOpacity={0.7}>
            <ExpoImage
              source={require('@/assets/images/emoji-icon.png')}
              style={styles.iconImage}
              contentFit="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallIconCircle} activeOpacity={0.7}>
            <ExpoImage
              source={require('@/assets/images/message-icon.png')}
              style={styles.iconImage}
              contentFit="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.shareIconContainer} activeOpacity={0.7}>
        <ExpoImage
          source={require('@/assets/images/share-icon.png')}
          style={styles.shareIconImage}
          contentFit="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 16,
    marginBottom: 20,
    position: 'relative',
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    paddingTop: 16,
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
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 4,
    zIndex: 1,
  },
  breakingText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  articleText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#000000',
    marginTop: 0,
  },
  articleTextWithBadge: {
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: -1,
    paddingHorizontal: 4,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  timestamp: {
    fontSize: 13,
    color: '#999999',
  },
  smallIconCircle: {
    width: 28,
    height: 14,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  iconImage: {
    width: 16,
    height: 16,
    marginTop: -2,
  },
  shareIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    bottom: 12,
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

