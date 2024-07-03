'use client';

import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollContainerProps {
  children: React.ReactNode;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.querySelector<HTMLDivElement>('li')!.clientWidth;
      container.scrollBy({
        left: direction === 'left' ? -itemWidth : itemWidth,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const updateButtonsState = () => {
      const scrollButtons = document.querySelectorAll('.scroll-button');

      scrollButtons.forEach((button) => {
        const parentContainer = button.closest('.scrollable-wrapper');
        if (parentContainer) {
          const container = parentContainer.querySelector('.scroll-container')!;
          const scrollLeftButton = parentContainer.querySelector('#scrollLeft') as HTMLButtonElement;
          const scrollRightButton = parentContainer.querySelector('#scrollRight') as HTMLButtonElement;
          scrollLeftButton.disabled = container!.scrollLeft === 0;
          scrollRightButton.disabled = container!.scrollLeft >= container!.scrollWidth - container!.clientWidth;
        }
      });
    };

    const container = scrollContainerRef.current;

    if (container) {
      container.addEventListener('scroll', updateButtonsState);
      updateButtonsState();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', updateButtonsState);
      }
    };
  }, []);

  return (
    <div className="scrollable-wrapper">
      <div className="scroll-container" ref={scrollContainerRef}>
        <div className="item-container">
          {children}
        </div>
      </div>
      <div className="scroll-buttons">
        <button id="scrollLeft" className="scroll-button" onClick={() => scroll('left')}>
          <ChevronLeft strokeWidth={3} />
        </button>
        <button id="scrollRight" className="scroll-button" onClick={() => scroll('right')}>
          <ChevronRight strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default ScrollContainer;
