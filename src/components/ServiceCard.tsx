import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  actionText: string;
  onAction: () => void;
  variant?: 'default' | 'premium' | 'highlight';
}

export const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  actionText, 
  onAction,
  variant = 'default'
}: ServiceCardProps) => {
  return (
    <Card className={cn(
      "group hover:shadow-luxury transition-all duration-300 hover:-translate-y-1",
      variant === 'premium' && "bg-gradient-sunset border-coral/20",
      variant === 'highlight' && "bg-gradient-pearl border-ocean-light/30",
      "cursor-pointer"
    )}>
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-3">
          <div className={cn(
            "p-3 rounded-xl transition-colors",
            variant === 'premium' ? "bg-white/20" : "bg-ocean-light/20"
          )}>
            <Icon className={cn(
              "h-6 w-6",
              variant === 'premium' ? "text-white" : "text-ocean-blue"
            )} />
          </div>
          <div>
            <CardTitle className={cn(
              "text-lg",
              variant === 'premium' && "text-white"
            )}>{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className={cn(
          "mb-4 text-sm leading-relaxed",
          variant === 'premium' && "text-white/80"
        )}>
          {description}
        </CardDescription>
        <Button 
          onClick={onAction}
          variant={variant === 'premium' ? 'secondary' : 'default'}
          className={cn(
            "w-full transition-all duration-300",
            variant === 'premium' && "bg-white/20 hover:bg-white/30 text-white border-white/20"
          )}
        >
          {actionText}
        </Button>
      </CardContent>
    </Card>
  );
};