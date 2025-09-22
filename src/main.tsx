import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initSiteAnimations } from './lib/animations'

createRoot(document.getElementById("root")!).render(<App />);

// Initialize site animations after a small timeout to ensure DOM is ready
if (typeof window !== 'undefined') {
	window.requestAnimationFrame(() => {
		try {
			initSiteAnimations();
		} catch (e) {
			// silently fail - animations are progressive enhancement
			// console.warn('Animations init failed', e);
		}
	});
}
