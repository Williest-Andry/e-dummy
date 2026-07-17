export interface Post {
  id: number;
  title: number;
  body: number;
  tags: string[];
  reactions: { likes: number; dislikes: number };
  views: number;
  userId: number;
}
