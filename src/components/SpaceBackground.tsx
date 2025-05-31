
import { Rocket, Star, Satellite } from 'lucide-react';

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Stars */}
      <Star 
        className="absolute top-20 left-10 w-4 h-4 text-yellow-300 opacity-60 animate-pulse-slow" 
        style={{ animationDelay: '0s' }}
      />
      <Star 
        className="absolute top-40 right-20 w-3 h-3 text-yellow-200 opacity-40 animate-pulse-slow" 
        style={{ animationDelay: '1s' }}
      />
      <Star 
        className="absolute top-60 left-1/4 w-2 h-2 text-yellow-400 opacity-50 animate-pulse-slow" 
        style={{ animationDelay: '2s' }}
      />
      <Star 
        className="absolute bottom-40 right-1/3 w-3 h-3 text-yellow-300 opacity-45 animate-pulse-slow" 
        style={{ animationDelay: '0.5s' }}
      />
      <Star 
        className="absolute bottom-60 left-20 w-4 h-4 text-yellow-200 opacity-35 animate-pulse-slow" 
        style={{ animationDelay: '1.5s' }}
      />

      {/* Rockets */}
      <Rocket 
        className="absolute top-32 right-10 w-8 h-8 text-primary opacity-30 animate-float" 
        style={{ animationDelay: '0s', transform: 'rotate(45deg)' }}
      />
      <Rocket 
        className="absolute bottom-32 left-1/3 w-6 h-6 text-secondary opacity-25 animate-float" 
        style={{ animationDelay: '2s', transform: 'rotate(-30deg)' }}
      />

      {/* Satellites */}
      <Satellite 
        className="absolute top-1/3 left-16 w-7 h-7 text-cv opacity-20 animate-bounce-subtle" 
        style={{ animationDelay: '1s' }}
      />
      <Satellite 
        className="absolute bottom-1/4 right-16 w-5 h-5 text-projects opacity-25 animate-bounce-subtle" 
        style={{ animationDelay: '3s' }}
      />

      {/* Additional floating elements for mobile */}
      <div className="md:hidden">
        <Star 
          className="absolute top-1/2 right-8 w-2 h-2 text-yellow-300 opacity-40 animate-pulse-slow" 
          style={{ animationDelay: '2.5s' }}
        />
        <Star 
          className="absolute bottom-1/3 left-8 w-3 h-3 text-yellow-200 opacity-30 animate-pulse-slow" 
          style={{ animationDelay: '0.8s' }}
        />
      </div>

      {/* Additional elements for desktop */}
      <div className="hidden md:block">
        <Star 
          className="absolute top-1/4 left-1/2 w-2 h-2 text-yellow-400 opacity-35 animate-pulse-slow" 
          style={{ animationDelay: '1.8s' }}
        />
        <Star 
          className="absolute bottom-1/2 right-1/4 w-3 h-3 text-yellow-300 opacity-40 animate-pulse-slow" 
          style={{ animationDelay: '0.3s' }}
        />
        <Rocket 
          className="absolute top-3/4 left-10 w-6 h-6 text-primary opacity-20 animate-float" 
          style={{ animationDelay: '4s', transform: 'rotate(60deg)' }}
        />
        <Satellite 
          className="absolute top-1/2 right-1/3 w-6 h-6 text-secondary opacity-15 animate-bounce-subtle" 
          style={{ animationDelay: '2.5s' }}
        />
      </div>
    </div>
  );
};

export default SpaceBackground;
