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
          <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7}>
            <Text style={styles.emoji}>😊</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7}>
            <IconSymbol name="bubble.left" size={16} color="#666666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconCircle} activeOpacity={0.7}>
            <IconSymbol name="paperplane" size={16} color="#666666" />
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
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  timestamp: {
    fontSize: 13,
    color: '#999999',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 16,
  },
});

