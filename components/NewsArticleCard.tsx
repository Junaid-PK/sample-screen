import { NewsArticle } from '@/constants/data';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconSymbol } from './ui/icon-symbol';

interface NewsArticleCardProps {
  article: NewsArticle;
}

export default function NewsArticleCard({ article }: NewsArticleCardProps) {
  return (
    <View style={styles.container}>
      {article.isBreaking && (
        <View style={styles.breakingBadge}>
          <Text style={styles.breakingText}>BREAKING</Text>
        </View>
      )}
      <Text style={styles.articleText}>{article.text}</Text>
      <View style={styles.footer}>
        <Text style={styles.timestamp}>{article.timestamp}</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
            <Text style={styles.emoji}>😊</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
            <IconSymbol name="bubble.left" size={18} color="#666666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton} activeOpacity={0.7}>
            <IconSymbol name="paperplane" size={18} color="#666666" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    position: 'relative',
  },
  breakingBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#FF0000',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
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
    marginTop: 8,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timestamp: {
    fontSize: 13,
    color: '#666666',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  actionButton: {
    padding: 4,
  },
  emoji: {
    fontSize: 18,
  },
  shareButton: {
    padding: 4,
  },
});

