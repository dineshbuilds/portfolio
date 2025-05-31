
import { Rocket, Star, Satellite } from 'lucide-react';

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Stars - Made larger and more visible */}
      <Star 
        className="absolute top-20 left-10 w-8 h-8 text-yellow-400 opacity-80 animate-pulse-slow drop-shadow-lg" 
        style={{ animationDelay: '0s' }}
        fill="currentColor"
      />
      <Star 
        className="absolute top-40 right-20 w-6 h-6 text-yellow-300 opacity-70 animate-pulse-slow drop-shadow-md" 
        style={{ animationDelay: '1s' }}
        fill="currentColor"
      />
      <Star 
        className="absolute top-60 left-1/4 w-5 h-5 text-yellow-500 opacity-75 animate-pulse-slow drop-shadow-md" 
        style={{ animationDelay: '2s' }}
        fill="currentColor"
      />
      <Star 
        className="absolute bottom-40 right-1/3 w-7 h-7 text-yellow-300 opacity-85 animate-pulse-slow drop-shadow-lg" 
        style={{ animationDelay: '0.5s' }}
        fill="currentColor"
      />
      <Star 
        className="absolute bottom-60 left-20 w-6 h-6 text-yellow-400 opacity-60 animate-pulse-slow drop-shadow-md" 
        style={{ animationDelay: '1.5s' }}
        fill="currentColor"
      />

      {/* Rockets - Made larger and more colorful */}
      <Rocket 
        className="absolute top-32 right-10 w-12 h-12 text-primary opacity-60 animate-float drop-shadow-xl" 
        style={{ animationDelay: '0s', transform: 'rotate(45deg)' }}
      />
      <Rocket 
        className="absolute bottom-32 left-1/3 w-10 h-10 text-secondary opacity-55 animate-float drop-shadow-lg" 
        style={{ animationDelay: '2s', transform: 'rotate(-30deg)' }}
      />

      {/* Satellites - Made larger and more visible */}
      <Satellite 
        className="absolute top-1/3 left-16 w-10 h-10 text-cv opacity-50 animate-bounce-subtle drop-shadow-xl" 
        style={{ animationDelay: '1s' }}
      />
      <Satellite 
        className="absolute bottom-1/4 right-16 w-8 h-8 text-projects opacity-55 animate-bounce-subtle drop-shadow-lg" 
        style={{ animationDelay: '3s' }}
      />

      {/* Additional floating elements for mobile - Made more visible */}
      <div className="md:hidden">
        <Star 
          className="absolute top-1/2 right-8 w-5 h-5 text-yellow-400 opacity-70 animate-pulse-slow drop-shadow-md" 
          style={{ animationDelay: '2.5s' }}
          fill="currentColor"
        />
        <Star 
          className="absolute bottom-1/3 left-8 w-6 h-6 text-yellow-300 opacity-60 animate-pulse-slow drop-shadow-md" 
          style={{ animationDelay: '0.8s' }}
          fill="currentColor"
        />
        <Rocket 
          className="absolute top-2/3 right-12 w-8 h-8 text-primary opacity-40 animate-float drop-shadow-lg" 
          style={{ animationDelay: '1.5s', transform: 'rotate(90deg)' }}
        />
      </div>

      {/* Additional elements for desktop - Made larger and more attractive */}
      <div className="hidden md:block">
        <Star 
          className="absolute top-1/4 left-1/2 w-5 h-5 text-yellow-500 opacity-75 animate-pulse-slow drop-shadow-md" 
          style={{ animationDelay: '1.8s' }}
          fill="currentColor"
        />
        <Star 
          className="absolute bottom-1/2 right-1/4 w-7 h-7 text-yellow-300 opacity-80 animate-pulse-slow drop-shadow-lg" 
          style={{ animationDelay: '0.3s' }}
          fill="currentColor"
        />
        <Rocket 
          className="absolute top-3/4 left-10 w-10 h-10 text-primary opacity-45 animate-float drop-shadow-xl" 
          style={{ animationDelay: '4s', transform: 'rotate(60deg)' }}
        />
        <Satellite 
          className="absolute top-1/2 right-1/3 w-9 h-9 text-secondary opacity-40 animate-bounce-subtle drop-shadow-xl" 
          style={{ animationDelay: '2.5s' }}
        />
        <Star 
          className="absolute top-16 left-1/3 w-4 h-4 text-yellow-400 opacity-65 animate-pulse-slow drop-shadow-sm" 
          style={{ animationDelay: '3.2s' }}
          fill="currentColor"
        />
        <Star 
          className="absolute bottom-20 left-1/2 w-6 h-6 text-yellow-500 opacity-70 animate-pulse-slow drop-shadow-md" 
          style={{ animationDelay: '2.8s' }}
          fill="currentColor"
        />
        <Rocket 
          className="absolute top-1/2 left-8 w-8 h-8 text-cv opacity-35 animate-float drop-shadow-lg" 
          style={{ animationDelay: '5s', transform: 'rotate(-45deg)' }}
        />
      </div>
    </div>
  );
};

export default SpaceBackground;
