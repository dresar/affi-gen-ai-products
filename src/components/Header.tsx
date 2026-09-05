
import React from 'react';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Product Generator
              </h1>
              <p className="text-sm text-gray-600">Generate affiliate products with AI</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-2">
              Tutorial
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Upgrade Pro
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
