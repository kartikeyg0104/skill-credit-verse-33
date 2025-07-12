
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Image, 
  Smile, 
  MapPin, 
  Calendar,
  Hash
} from 'lucide-react';

interface CreatePostProps {
  onPost: (content: string, image?: string) => void;
}

export const CreatePost: React.FC<CreatePostProps> = ({ onPost }) => {
  const [content, setContent] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = () => {
    if (content.trim()) {
      onPost(content);
      setContent('');
      setIsExpanded(false);
    }
  };

  const handleFocus = () => {
    setIsExpanded(true);
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-3">
            <Textarea
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onFocus={handleFocus}
              className="min-h-[80px] resize-none border-none p-0 focus-visible:ring-0 text-lg placeholder:text-muted-foreground"
            />
            
            {isExpanded && (
              <>
                <div className="flex items-center space-x-4 py-2">
                  <Button variant="ghost" size="sm">
                    <Image className="h-4 w-4 mr-2" />
                    Photo
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Smile className="h-4 w-4 mr-2" />
                    Emoji
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    Location
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Hash className="h-4 w-4 mr-2" />
                    Tag
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    {content.length}/500
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => {
                        setContent('');
                        setIsExpanded(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button 
                      size="sm"
                      onClick={handleSubmit}
                      disabled={!content.trim()}
                    >
                      Post
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
