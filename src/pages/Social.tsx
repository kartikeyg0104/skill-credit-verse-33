
import React from 'react';
import { SocialFeed } from '@/components/social/SocialFeed';
import { SocialHeader } from '@/components/social/SocialHeader';
import { SocialSidebar } from '@/components/social/SocialSidebar';

const Social = () => {
  return (
    <div className="min-h-screen bg-background">
      <SocialHeader />
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <SocialSidebar />
          </div>
          <div className="lg:col-span-3">
            <SocialFeed />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
