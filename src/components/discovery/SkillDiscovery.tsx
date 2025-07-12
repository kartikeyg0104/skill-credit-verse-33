import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp,
  BookOpen,
  Code,
  Palette,
  Camera,
  Music,
  Language,
  Home,
  MessageSquare
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';

const SkillDiscovery = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  const mockUsers = [
    {
      id: 1,
      name: 'Sarah Chen',
      location: 'San Francisco, CA',
      rating: 4.9,
      reviewCount: 42,
      skills: ['React Development', 'JavaScript', 'Node.js'],
      seeking: ['UI/UX Design', 'Product Management'],
      bio: 'Senior software engineer with 8+ years experience.'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      location: 'Austin, TX',
      rating: 4.8,
      reviewCount: 38,
      skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite'],
      seeking: ['React Development', 'Flutter'],
      bio: 'Product designer with passion for clean design.'
    }
  ];

  const handleSkillRequest = (userName: string) => {
    toast.success(`Skill request sent to ${userName}!`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2"
            >
              <Home className="h-4 w-4" />
              <span>SkillSwap</span>
            </Button>
            
            {user && (
              <Button
                variant="ghost"
                onClick={() => navigate('/dashboard')}
              >
                Dashboard
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Discover Skills & Teachers</h1>

        {/* Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search skills or people..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Users Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockUsers.map((user) => (
            <Card key={user.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback>
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{user.name}</CardTitle>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{user.location}</span>
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{user.rating}</span>
                      <span className="text-sm text-muted-foreground">({user.reviewCount})</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{user.bio}</p>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Teaches:</h4>
                  <div className="flex flex-wrap gap-1">
                    {user.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Wants to learn:</h4>
                  <div className="flex flex-wrap gap-1">
                    {user.seeking.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleSkillRequest(user.name)}
                >
                  Request Swap
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillDiscovery;