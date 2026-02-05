import { useState, useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoadingScreen from './pages/LoadingScreen';
import IntroScreen from './pages/IntroScreen';
import CakeScreen from './pages/CakeScreen';
import BalloonScreen from './pages/BalloonScreen';
import MessageScreen1 from './pages/MessageScreen1';
import MessageScreen2 from './pages/MessageScreen2';
import PreFinalLoadingScreen from './pages/PreFinalLoadingScreen';
import HandwrittenNoteScreen from './pages/HandwrittenNoteScreen';
import FinalScreen from './pages/FinalScreen';

const queryClient = new QueryClient();

function AppContent() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [fadeOut, setFadeOut] = useState(false);
  const isTransitioning = useRef(false);

  const handleNextScreen = () => {
    if (isTransitioning.current) return;
    
    isTransitioning.current = true;
    setFadeOut(true);
    setTimeout(() => {
      setCurrentScreen((prev) => prev + 1);
      setFadeOut(false);
      isTransitioning.current = false;
    }, 400);
  };

  const handleRestart = () => {
    if (isTransitioning.current) return;
    
    isTransitioning.current = true;
    setFadeOut(true);
    setTimeout(() => {
      setCurrentScreen(1);
      setFadeOut(false);
      isTransitioning.current = false;
    }, 400);
  };

  return (
    <div className={`min-h-screen transition-opacity duration-400 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {currentScreen === 1 && <LoadingScreen onComplete={handleNextScreen} />}
      {currentScreen === 2 && <IntroScreen onNext={handleNextScreen} />}
      {currentScreen === 3 && <CakeScreen onNext={handleNextScreen} />}
      {currentScreen === 4 && <BalloonScreen onNext={handleNextScreen} />}
      {currentScreen === 5 && <MessageScreen1 onNext={handleNextScreen} />}
      {currentScreen === 6 && <MessageScreen2 onNext={handleNextScreen} />}
      {currentScreen === 7 && <PreFinalLoadingScreen onComplete={handleNextScreen} />}
      {currentScreen === 8 && <HandwrittenNoteScreen onNext={handleNextScreen} />}
      {currentScreen === 9 && <FinalScreen onRestart={handleRestart} />}
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
