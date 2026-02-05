import { useState, useRef, useCallback, useEffect } from 'react';

interface ZoomPanState {
  scale: number;
  translateX: number;
  translateY: number;
}

interface UseZoomPanOptions {
  minScale?: number;
  maxScale?: number;
  initialScale?: number;
}

export function useZoomPan(options: UseZoomPanOptions = {}) {
  const {
    minScale = 1,
    maxScale = 4,
    initialScale = 1,
  } = options;

  const [state, setState] = useState<ZoomPanState>({
    scale: initialScale,
    translateX: 0,
    translateY: 0,
  });

  const [isDragging, setIsDragging] = useState(false);
  const lastPointerPos = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const clampTranslation = useCallback((x: number, y: number, scale: number) => {
    if (!containerRef.current) return { x, y };
    
    const container = containerRef.current;
    const maxTranslateX = (container.offsetWidth * (scale - 1)) / 2;
    const maxTranslateY = (container.offsetHeight * (scale - 1)) / 2;

    return {
      x: Math.max(-maxTranslateX, Math.min(maxTranslateX, x)),
      y: Math.max(-maxTranslateY, Math.min(maxTranslateY, y)),
    };
  }, []);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    setState((prev) => {
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      const newScale = Math.max(minScale, Math.min(maxScale, prev.scale * delta));
      
      if (newScale === minScale) {
        return { scale: minScale, translateX: 0, translateY: 0 };
      }
      
      const clamped = clampTranslation(prev.translateX, prev.translateY, newScale);
      return {
        scale: newScale,
        translateX: clamped.x,
        translateY: clamped.y,
      };
    });
  }, [minScale, maxScale, clampTranslation]);

  const handlePointerDown = useCallback((e: PointerEvent) => {
    if (state.scale <= minScale) return;
    
    setIsDragging(true);
    lastPointerPos.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [state.scale, minScale]);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!isDragging || state.scale <= minScale) return;

    const deltaX = e.clientX - lastPointerPos.current.x;
    const deltaY = e.clientY - lastPointerPos.current.y;
    
    lastPointerPos.current = { x: e.clientX, y: e.clientY };

    setState((prev) => {
      const newX = prev.translateX + deltaX;
      const newY = prev.translateY + deltaY;
      const clamped = clampTranslation(newX, newY, prev.scale);
      
      return {
        ...prev,
        translateX: clamped.x,
        translateY: clamped.y,
      };
    });
  }, [isDragging, state.scale, minScale, clampTranslation]);

  const handlePointerUp = useCallback((e: PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  }, []);

  const zoomIn = useCallback(() => {
    setState((prev) => {
      const newScale = Math.min(maxScale, prev.scale * 1.2);
      const clamped = clampTranslation(prev.translateX, prev.translateY, newScale);
      return {
        scale: newScale,
        translateX: clamped.x,
        translateY: clamped.y,
      };
    });
  }, [maxScale, clampTranslation]);

  const zoomOut = useCallback(() => {
    setState((prev) => {
      const newScale = Math.max(minScale, prev.scale / 1.2);
      
      if (newScale === minScale) {
        return { scale: minScale, translateX: 0, translateY: 0 };
      }
      
      const clamped = clampTranslation(prev.translateX, prev.translateY, newScale);
      return {
        scale: newScale,
        translateX: clamped.x,
        translateY: clamped.y,
      };
    });
  }, [minScale, clampTranslation]);

  const reset = useCallback(() => {
    setState({
      scale: initialScale,
      translateX: 0,
      translateY: 0,
    });
  }, [initialScale]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('pointercancel', handlePointerUp);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [handleWheel, handlePointerDown, handlePointerMove, handlePointerUp]);

  return {
    containerRef,
    state,
    isDragging,
    zoomIn,
    zoomOut,
    reset,
    canZoomIn: state.scale < maxScale,
    canZoomOut: state.scale > minScale,
  };
}
