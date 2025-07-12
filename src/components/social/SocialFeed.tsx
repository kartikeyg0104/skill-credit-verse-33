
import React, { useState } from 'react';
import { SocialPost } from './SocialPost';
import { CreatePost } from './CreatePost';

export const SocialFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: '1',
      author: {
        name: 'Alex Thompson',
        username: '@alexthompson',
        avatar: '',
        verified: true
      },
      content: 'Just shipped a new feature at work! The team collaboration was incredible. Nothing beats the feeling of seeing users love what you\'ve built. 🚀 #WebDev #ProductLaunch',
      timestamp: '2h',
      likes: 42,
      comments: 8,
      shares: 3,
      image: null,
      liked: false,
      bookmarked: false
    },
    {
      id: '2',
      author: {
        name: 'Sarah Mitchell',
        username: '@sarahdesigns',
        avatar: '',
        verified: false
      },
      content: 'Working on some UI concepts for a fintech app. The challenge is making complex financial data feel approachable and friendly. Any thoughts on this direction?',
      timestamp: '4h',
      likes: 28,
      comments: 12,
      shares: 5,
      image: '/placeholder.svg',
      liked: true,
      bookmarked: false
    },
    {
      id: '3',
      author: {
        name: 'David Chen',
        username: '@davidcodes',
        avatar: '',
        verified: true
      },
      content: 'Hot take: The best code is not the most clever code, it\'s the most readable code. Your future self (and your teammates) will thank you. 📝\n\nWhat are your thoughts on code readability vs. performance optimization?',
      timestamp: '6h',
      likes: 156,
      comments: 24,
      shares: 18,
      image: null,
      liked: false,
      bookmarked: true
    }
  ]);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            liked: !post.liked, 
            likes: post.liked ? post.likes - 1 : post.likes + 1 
          }
        : post
    ));
  };

  const handleBookmark = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, bookmarked: !post.bookmarked }
        : post
    ));
  };

  const handleAddPost = (content: string, image?: string) => {
    const newPost = {
      id: Date.now().toString(),
      author: {
        name: 'John Doe',
        username: '@johndoe',
        avatar: '',
        verified: false
      },
      content,
      timestamp: 'now',
      likes: 0,
      comments: 0,
      shares: 0,
      image: image || null,
      liked: false,
      bookmarked: false
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="space-y-6">
      <CreatePost onPost={handleAddPost} />
      
      <div className="space-y-4">
        {posts.map((post) => (
          <SocialPost
            key={post.id}
            post={post}
            onLike={handleLike}
            onBookmark={handleBookmark}
          />
        ))}
      </div>
    </div>
  );
};
