'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);
  const speed = 0.2;

  useLayoutEffect(() => {
    const cursor = cursorRef.current;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const xSet = gsap.quickSetter(cursor, 'x', 'px');
    const ySet = gsap.quickSetter(cursor, 'y', 'px');

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;

      if (e.target && e.target.dataset['hoverable'] === 'true') {
        gsap.to(cursor, {
          scale: 1.3,
          ease: 'power3',
          backgroundColor: 'var(--color-primary)',
          opacity: 0.75,
        });
      } else {
        gsap.to(cursor, {
          scale: 1,
          ease: 'power3',
          backgroundColor: 'transparent',
          opacity: 1,
        });
      }
    });

    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
  }, []);

  return (
    <div
      ref={cursorRef}
      className='pointer-events-none fixed z-50 hidden h-[50px] w-[50px] rounded-full border border-primary md:block'
    ></div>
  );
};
export default Cursor;
