import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  profile: {
    location?: string;
    bio?: string;
    profilePhoto?: string;
    isPublic: boolean;
    verified: boolean;
  };
  skillsOffered: Skill[];
  skillsWanted: Skill[];
  reputation: {
    overallRating: number;
    totalRatings: number;
    trustScore: number;
    badges: string[];
  };
  credits: {
    earned: number;
    spent: number;
    balance: number;
  };
}

interface Skill {
  id: string;
  skillName: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  description: string;
  endorsed: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('skillswap_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Mock login - in real app, this would be an API call
    try {
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email: email,
        profile: {
          location: 'San Francisco, CA',
          bio: 'Passionate about learning and sharing knowledge',
          isPublic: true,
          verified: true
        },
        skillsOffered: [
          {
            id: '1',
            skillName: 'React Development',
            category: 'Technology',
            level: 'Expert',
            description: 'Advanced React development with hooks and modern patterns',
            endorsed: true
          }
        ],
        skillsWanted: [
          {
            id: '2',
            skillName: 'UI/UX Design',
            category: 'Creative',
            level: 'Intermediate',
            description: 'Want to learn modern design principles',
            endorsed: false
          }
        ],
        reputation: {
          overallRating: 4.8,
          totalRatings: 24,
          trustScore: 95,
          badges: ['Expert Teacher', 'Reliable', 'Top Contributor']
        },
        credits: {
          earned: 150,
          spent: 75,
          balance: 75
        }
      };

      setUser(mockUser);
      localStorage.setItem('skillswap_user', JSON.stringify(mockUser));
      setIsLoading(false);
      return true;
    } catch (error) {
      setIsLoading(false);
      return false;
    }
  };

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Mock registration
    try {
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: name,
        email: email,
        profile: {
          isPublic: true,
          verified: false
        },
        skillsOffered: [],
        skillsWanted: [],
        reputation: {
          overallRating: 0,
          totalRatings: 0,
          trustScore: 50,
          badges: []
        },
        credits: {
          earned: 0,
          spent: 0,
          balance: 10 // Welcome bonus
        }
      };

      setUser(newUser);
      localStorage.setItem('skillswap_user', JSON.stringify(newUser));
      setIsLoading(false);
      return true;
    } catch (error) {
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('skillswap_user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};