
import React, { useEffect, useRef } from 'react';
import './SlidingTags.css'; // Import CSS file
import { Icon } from '@chakra-ui/react';

const ScrollingSection = ({  direction = 'left', speed = 'slow' }) => {
  const scrollerRef = useRef(null);
  const data=['Event Photography', 'Comercial Photography', 'Product Photography', 'Wedding Photography', 'Landscape Photography','Branding Photography','Portrait  Photography']

  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicatedItem);
        });

        // Calculate the width of the content and adjust animation duration
        const contentWidth = scrollerInner.scrollWidth;
        const speedMultiplier = speed === 'fast' ? 1 : 3;
        const duration = contentWidth / 100 * speedMultiplier;

        scroller.style.setProperty('--_animation-duration', `${duration}s`);
      });
    }
  }, [speed]);

  return (
    <div
      className="scroller"
      data-direction={direction}
      data-speed={speed}
      ref={scrollerRef}
    >
      <div className="scroller__inner">
        {data.map((item, index) => (
          <li key={index} >
            {item}</li>
        ))}
      </div>
    </div>
  );
};

export default ScrollingSection;
