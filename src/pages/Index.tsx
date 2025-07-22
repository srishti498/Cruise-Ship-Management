import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  UtensilsCrossed, 
  BookOpen, 
  Film, 
  Scissors, 
  Dumbbell, 
  PartyPopper,
  Waves,
  Calendar,
  Clock
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ServiceCard } from '@/components/ServiceCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/cruise-hero.jpg';

const Index = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Fine Dining",
      description: "Exquisite culinary experiences from around the world. From casual bites to gourmet meals.",
      icon: UtensilsCrossed,
      actionText: "View Menu",
      onAction: () => navigate('/dining'),
      variant: 'highlight' as const
    },
    {
      title: "Stationery & Gifts",
      description: "Unique souvenirs, books, and luxury items to remember your voyage.",
      icon: BookOpen,
      actionText: "Browse Collection",
      onAction: () => navigate('/stationery')
    },
    {
      title: "Entertainment",
      description: "Movie theaters, live shows, and resort activities for unforgettable moments.",
      icon: Film,
      actionText: "Book Tickets",
      onAction: () => navigate('/entertainment'),
      variant: 'premium' as const
    },
    {
      title: "Beauty Salon",
      description: "Rejuvenate with our full-service spa and salon treatments.",
      icon: Scissors,
      actionText: "Book Appointment",
      onAction: () => navigate('/beauty')
    },
    {
      title: "Fitness Center",
      description: "State-of-the-art equipment and personalized training sessions.",
      icon: Dumbbell,
      actionText: "Reserve Equipment",
      onAction: () => navigate('/fitness')
    },
    {
      title: "Party Hall",
      description: "Celebrate special occasions in our elegant event spaces.",
      icon: PartyPopper,
      actionText: "Book Event",
      onAction: () => navigate('/party'),
      variant: 'highlight' as const
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl">
          <img 
            src={heroImage} 
            alt="Luxury cruise ship" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="flex items-center space-x-2 mb-3">
              <Waves className="h-6 w-6" />
              <span className="text-lg font-semibold">Ocean Voyager</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">Welcome Aboard!</h1>
            <p className="text-xl text-white/90">
              Your digital concierge for an extraordinary cruise experience
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-ocean text-white">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Today's Schedule</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 mb-3">Check your reservations and upcoming activities</p>
              <Button variant="secondary" className="w-full">View Schedule</Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-sunset text-white">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Quick Dining</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 mb-3">Order room service or reserve a table instantly</p>
              <Button 
                variant="secondary" 
                className="w-full"
                onClick={() => navigate('/dining')}
              >
                Order Now
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-pearl">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-2">
                <PartyPopper className="h-5 w-5 text-ocean-blue" />
                <span className="text-ocean-deep">Special Events</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-ocean-deep/80 mb-3">Discover tonight's entertainment and activities</p>
              <Button 
                className="w-full bg-ocean-blue hover:bg-ocean-deep"
                onClick={() => navigate('/entertainment')}
              >
                Explore Events
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                actionText={service.actionText}
                onAction={service.onAction}
                variant={service.variant}
              />
            ))}
          </div>
        </div>

        {/* Info Section */}
        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle className="text-2xl">Need Assistance?</CardTitle>
            <CardDescription className="text-base">
              Our digital concierge is available 24/7 to help you make the most of your cruise experience.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" size="lg">
                Contact Guest Services
              </Button>
              <Button variant="outline" size="lg">
                Emergency Information
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;
