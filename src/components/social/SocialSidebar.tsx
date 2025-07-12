
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Users, 
  Calendar,
  Hash,
  User
} from 'lucide-react';

export const SocialSidebar = () => {
  const trendingTopics = [
    { tag: 'TechNews', posts: '1.2k' },
    { tag: 'WebDev', posts: '856' },
    { tag: 'AI', posts: '723' },
    { tag: 'Design', posts: '445' },
    { tag: 'Startup', posts: '332' }
  ];

  const suggestedConnections = [
    { name: 'Sarah Chen', role: 'UI/UX Designer', mutualConnections: 12 },
    { name: 'Mike Rodriguez', role: 'Frontend Developer', mutualConnections: 8 },
    { name: 'Emily Davis', role: 'Product Manager', mutualConnections: 15 }
  ];

  return (
    <div className="space-y-6">
      {/* User Profile Card */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-muted-foreground">Software Engineer</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4 text-center">
            <div>
              <div className="font-semibold">248</div>
              <div className="text-xs text-muted-foreground">Posts</div>
            </div>
            <div>
              <div className="font-semibold">1.2k</div>
              <div className="text-xs text-muted-foreground">Following</div>
            </div>
            <div>
              <div className="font-semibold">890</div>
              <div className="text-xs text-muted-foreground">Followers</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Trending
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Hash className="h-4 w-4 text-primary" />
                <span className="font-medium">{topic.tag}</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {topic.posts}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Suggested Connections */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Users className="h-5 w-5 mr-2" />
            People You May Know
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {suggestedConnections.map((person, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium text-sm">{person.name}</div>
                  <div className="text-xs text-muted-foreground">{person.role}</div>
                  <div className="text-xs text-muted-foreground">
                    {person.mutualConnections} mutual connections
                  </div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                Connect
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
