
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  MessageCircle, 
  Share, 
  Bookmark,
  MoreHorizontal,
  Verified
} from 'lucide-react';

interface Author {
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
}

interface Post {
  id: string;
  author: Author;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  image?: string | null;
  liked: boolean;
  bookmarked: boolean;
}

interface SocialPostProps {
  post: Post;
  onLike: (postId: string) => void;
  onBookmark: (postId: string) => void;
}

export const SocialPost: React.FC<SocialPostProps> = ({ 
  post, 
  onLike, 
  onBookmark 
}) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        {/* Post Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback>
                {post.author.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-1">
                <span className="font-semibold">{post.author.name}</span>
                {post.author.verified && (
                  <Verified className="h-4 w-4 text-blue-500 fill-current" />
                )}
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>{post.author.username}</span>
                <span>•</span>
                <span>{post.timestamp}</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Post Content */}
        <div className="mb-4">
          <p className="text-foreground leading-relaxed whitespace-pre-wrap">
            {post.content}
          </p>
          
          {post.image && (
            <div className="mt-3 rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt="Post image"
                className="w-full h-auto max-h-96 object-cover"
              />
            </div>
          )}
        </div>

        {/* Engagement Stats */}
        <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
          {post.likes > 0 && (
            <span>{post.likes} {post.likes === 1 ? 'like' : 'likes'}</span>
          )}
          {post.comments > 0 && (
            <span>{post.comments} {post.comments === 1 ? 'comment' : 'comments'}</span>
          )}
          {post.shares > 0 && (
            <span>{post.shares} {post.shares === 1 ? 'share' : 'shares'}</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-2 border-t">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onLike(post.id)}
            className={`flex items-center space-x-2 ${
              post.liked ? 'text-red-500 hover:text-red-600' : ''
            }`}
          >
            <Heart className={`h-4 w-4 ${post.liked ? 'fill-current' : ''}`} />
            <span>Like</span>
          </Button>

          <Button variant="ghost" size="sm" className="flex items-center space-x-2">
            <MessageCircle className="h-4 w-4" />
            <span>Comment</span>
          </Button>

          <Button variant="ghost" size="sm" className="flex items-center space-x-2">
            <Share className="h-4 w-4" />
            <span>Share</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => onBookmark(post.id)}
            className={`flex items-center space-x-2 ${
              post.bookmarked ? 'text-blue-500 hover:text-blue-600' : ''
            }`}
          >
            <Bookmark className={`h-4 w-4 ${post.bookmarked ? 'fill-current' : ''}`} />
            <span>Save</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
