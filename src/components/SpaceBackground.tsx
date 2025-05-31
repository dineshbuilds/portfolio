
import { Rocket, Star, Satellite, Moon } from 'lucide-react';

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Galaxy Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
      
      {/* Large Stars - Made much more visible */}
      <Star 
        className="absolute top-20 left-10 w-12 h-12 text-yellow-300 animate-pulse-slow drop-shadow-2xl" 
        style={{ animationDelay: '0s', filter: 'drop-shadow(0 0 10px #fbbf24)' }}
        fill="currentColor"
      />
      <Star 
        className="absolute top-40 right-20 w-10 h-10 text-yellow-400 animate-pulse-slow drop-shadow-xl" 
        style={{ animationDelay: '1s', filter: 'drop-shadow(0 0 8px #f59e0b)' }}
        fill="currentColor"
      />
      <Star 
        className="absolute top-60 left-1/4 w-8 h-8 text-yellow-200 animate-pulse-slow drop-shadow-lg" 
        style={{ animationDelay: '2s', filter: 'drop-shadow(0 0 6px #fef08a)' }}
        fill="currentColor"
      />
      <Star 
        className="absolute bottom-40 right-1/3 w-14 h-14 text-yellow-300 animate-pulse-slow drop-shadow-2xl" 
        style={{ animationDelay: '0.5s', filter: 'drop-shadow(0 0 12px #fbbf24)' }}
        fill="currentColor"
      />

      {/* Moon */}
      <Moon 
        className="absolute top-16 right-1/4 w-16 h-16 text-gray-300 animate-float drop-shadow-2xl" 
        style={{ animationDelay: '1s', filter: 'drop-shadow(0 0 15px #d1d5db)' }}
        fill="currentColor"
      />

      {/* Saturn (using a custom SVG-like div) */}
      <div className="absolute bottom-1/3 left-16 w-20 h-20 animate-float" style={{ animationDelay: '3s' }}>
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-yellow-500 rounded-full shadow-2xl" 
               style={{ filter: 'drop-shadow(0 0 20px #f97316)' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-2 border-2 border-orange-400/60 rounded-full rotate-12"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-2 border border-orange-300/40 rounded-full rotate-12"></div>
        </div>
      </div>

      {/* Planets */}
      <div className="absolute top-1/3 right-12 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-bounce-subtle drop-shadow-xl" 
           style={{ animationDelay: '2s', filter: 'drop-shadow(0 0 15px #3b82f6)' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-full animate-float drop-shadow-lg" 
           style={{ animationDelay: '4s', filter: 'drop-shadow(0 0 12px #ef4444)' }}></div>
      <div className="absolute top-2/3 right-1/4 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-bounce-subtle drop-shadow-md" 
           style={{ animationDelay: '1.5s', filter: 'drop-shadow(0 0 10px #10b981)' }}></div>

      {/* Large Rockets - Made much more visible */}
      <Rocket 
        className="absolute top-32 right-10 w-16 h-16 text-primary animate-float drop-shadow-2xl" 
        style={{ animationDelay: '0s', transform: 'rotate(45deg)', filter: 'drop-shadow(0 0 20px #6366f1)' }}
      />
      <Rocket 
        className="absolute bottom-32 left-1/3 w-14 h-14 text-secondary animate-float drop-shadow-xl" 
        style={{ animationDelay: '2s', transform: 'rotate(-30deg)', filter: 'drop-shadow(0 0 18px #06b6d4)' }}
      />

      {/* Satellites - Made much more visible */}
      <Satellite 
        className="absolute top-1/3 left-16 w-14 h-14 text-cv animate-bounce-subtle drop-shadow-2xl" 
        style={{ animationDelay: '1s', filter: 'drop-shadow(0 0 15px #22c55e)' }}
      />
      <Satellite 
        className="absolute bottom-1/4 right-16 w-12 h-12 text-projects animate-bounce-subtle drop-shadow-xl" 
        style={{ animationDelay: '3s', filter: 'drop-shadow(0 0 12px #f97316)' }}
      />

      {/* Galaxy Spiral (CSS-based) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-30">
        <div className="w-full h-full border-2 border-purple-400/40 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
          <div className="absolute top-2 left-2 w-4 h-4 bg-purple-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 right-4 w-3 h-3 bg-pink-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-0 w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Additional Mobile Elements */}
      <div className="md:hidden">
        <Star 
          className="absolute top-1/2 right-8 w-8 h-8 text-yellow-400 animate-pulse-slow drop-shadow-lg" 
          style={{ animationDelay: '2.5s', filter: 'drop-shadow(0 0 8px #f59e0b)' }}
          fill="currentColor"
        />
        <div className="absolute bottom-1/3 left-8 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full animate-bounce-subtle drop-shadow-md" 
             style={{ animationDelay: '0.8s', filter: 'drop-shadow(0 0 10px #8b5cf6)' }}></div>
        <Rocket 
          className="absolute top-2/3 right-12 w-10 h-10 text-primary animate-float drop-shadow-lg" 
          style={{ animationDelay: '1.5s', transform: 'rotate(90deg)', filter: 'drop-shadow(0 0 15px #6366f1)' }}
        />
      </div>

      {/* Additional Desktop Elements */}
      <div className="hidden md:block">
        <Star 
          className="absolute top-1/4 left-1/2 w-10 h-10 text-yellow-500 animate-pulse-slow drop-shadow-xl" 
          style={{ animationDelay: '1.8s', filter: 'drop-shadow(0 0 12px #eab308)' }}
          fill="currentColor"
        />
        <div className="absolute bottom-1/2 right-1/4 w-14 h-14 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full animate-float drop-shadow-xl" 
             style={{ animationDelay: '0.3s', filter: 'drop-shadow(0 0 18px #8b5cf6)' }}></div>
        <Rocket 
          className="absolute top-3/4 left-10 w-12 h-12 text-primary animate-float drop-shadow-xl" 
          style={{ animationDelay: '4s', transform: 'rotate(60deg)', filter: 'drop-shadow(0 0 15px #6366f1)' }}
        />
        <div className="absolute top-16 left-1/3 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse-slow drop-shadow-md" 
             style={{ animationDelay: '3.2s', filter: 'drop-shadow(0 0 8px #06b6d4)' }}></div>
        <Star 
          className="absolute bottom-20 left-1/2 w-12 h-12 text-yellow-300 animate-pulse-slow drop-shadow-xl" 
          style={{ animationDelay: '2.8s', filter: 'drop-shadow(0 0 15px #fbbf24)' }}
          fill="currentColor"
        />
        
        {/* Asteroid Belt */}
        <div className="absolute top-1/4 right-1/3 flex space-x-2 animate-float" style={{ animationDelay: '5s' }}>
          <div className="w-3 h-3 bg-gray-400 rounded-full drop-shadow-sm"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full drop-shadow-sm"></div>
          <div className="w-4 h-4 bg-gray-300 rounded-full drop-shadow-sm"></div>
        </div>
      </div>

      {/* Twinkling Stars Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SpaceBackground;
