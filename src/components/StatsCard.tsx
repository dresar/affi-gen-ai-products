
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const StatsCard = ({ title, value, description, icon: Icon, color }: StatsCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">{title}</p>
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
            <p className="text-xs text-gray-500 mt-1">{description}</p>
          </div>
          <div className={`p-3 rounded-xl bg-gradient-to-r ${color.includes('blue') ? 'from-blue-100 to-blue-200' : color.includes('purple') ? 'from-purple-100 to-purple-200' : color.includes('green') ? 'from-green-100 to-green-200' : 'from-orange-100 to-orange-200'}`}>
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
