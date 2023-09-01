'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRef, useLayoutEffect } from 'react';

export default function Home() {
  const landingRef = useRef(null);
  const introRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const intro = introRef.current;
    const landing = landingRef.current;

    gsap.set(intro, {
      y: '85%',
      scale: 0.8,
    });

    gsap.to(intro, {
      y: 0,
      scale: 1,
      backgroundColor: '#ffeccc',
      scrollTrigger: {
        start: 'top+=10% top',
        pin: landing,
        trigger: landing,
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <main className='relative min-h-screen bg-black text-primary'>
      {/* <Nav className='fixed left-0 top-0 w-screen bg-primary p-4 text-black' /> */}
      <section
        ref={landingRef}
        className='container relative flex h-screen items-center justify-center'
      >
        <h1 className='group relative text-5xl font-extrabold md:text-6xl lg:text-8xl'>
          I'M A<br />
          <div
            className='text-stoke text inline-block text-black'
            data-hoverable='true'
          >
            WEB DEVELOPER
          </div>
          <div
            className='absolute bottom-0 left-0 inline-block h-[2px] w-full origin-left scale-x-0 bg-primary transition-all group-hover:scale-x-100
		  '
          ></div>
        </h1>
        <section
          ref={introRef}
          className='absolute left-0 top-0 mx-auto flex min-h-screen w-full translate-y-[90%] items-center justify-center rounded-2xl bg-secondary p-10 text-black'
        >
          <p
            className='text-4xl tracking-wider lg:text-5xl'
            data-hoverable='true'
          >
            With 2 years of experience in the working world, I have developed
            various skillsets. I am a team-player who motivate others to work
            towards a common goal. Being a fast learner has made me work more
            efficiently. As a detailed oriented individual, I ensure my work is
            produce with quality within a short period of time.
            <br />
            <br />
            With my curious mindset, I always seeking for challenging problems
            to explore my capabilities and limits.
          </p>
        </section>
      </section>
      <section className='h-screen p-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        mollitia ratione unde maxime commodi harum iste consequatur veritatis
        exercitationem ullam aliquam deserunt temporibus expedita earum quod,
        eligendi laudantium totam eius?
      </section>
    </main>
  );
}
