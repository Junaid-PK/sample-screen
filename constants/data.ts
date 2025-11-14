export interface ContentSource {
  id: string;
  name: string;
  logo: string;
  color: string;
  hasNotification: boolean;
}

export interface NewsArticle {
  id: string;
  text: string;
  timestamp: string;
  isBreaking?: boolean;
  reactions: number;
  comments: number;
}

export interface RankingOutlet {
  id: string;
  rank: number;
  name: string;
  logo: string;
  followers: string;
  trend: 'up' | 'down' | 'neutral';
}

export const contentSources: ContentSource[] = [
  { id: '1', name: 'mtv', logo: 'mtv', color: '#0066CC', hasNotification: true },
  { id: '2', name: 'Ad', logo: 'Ad', color: '#FF69B4', hasNotification: true },
  { id: '3', name: 'M', logo: 'M', color: '#000000', hasNotification: true },
  { id: '4', name: 'star', logo: '★', color: '#000000', hasNotification: false },
  { id: '5', name: 'discord', logo: 'discord', color: '#5865F2', hasNotification: true },
  { id: '6', name: 'Ad2', logo: 'Ad', color: '#FF69B4', hasNotification: false },
  { id: '7', name: 'color1', logo: '●', color: '#FF6B6B', hasNotification: false },
  { id: '8', name: 'color2', logo: '●', color: '#4ECDC4', hasNotification: false },
];

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    text: "Lebanon's economic landscape shows signs of transformation with new central bank measures and growing tech sector investment.",
    timestamp: '5h',
    reactions: 0,
    comments: 0,
  },
  {
    id: '2',
    text: "Lebanon's economic landscape shows signs of transformation with new central bank measures and growing tech sector investment.",
    timestamp: '5h',
    isBreaking: true,
    reactions: 0,
    comments: 0,
  },
];

export const rankingOutlets: RankingOutlet[] = [
  { id: '1', rank: 1, name: 'Lebanon Times', logo: 'CNN', followers: '1.2M', trend: 'up' },
  { id: '2', rank: 2, name: 'Lebanon Times', logo: 'CNN', followers: '1.2M', trend: 'neutral' },
  { id: '3', rank: 3, name: 'Lebanon Times', logo: 'CNN', followers: '1.2M', trend: 'down' },
  { id: '4', rank: 4, name: 'Lebanon Times', logo: 'CNN', followers: '1.2M', trend: 'neutral' },
  { id: '5', rank: 5, name: 'Lebanon Times', logo: 'CNN', followers: '1.2M', trend: 'neutral' },
  { id: '6', rank: 6, name: 'Lebanon Times', logo: 'CNN', followers: '1.2M', trend: 'neutral' },
  { id: '7', rank: 7, name: 'Lebanon Times', logo: 'CNN', followers: '1.2M', trend: 'neutral' },
];

