'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRef, useLayoutEffect } from 'react';

import { skill } from '@/data/data';
import SkillBox from '@/components/skills';

export default function Home() {
  const landingRef = useRef(null);
  const introRef = useRef(null);
  const pRef = useRef(null);
  const skillSectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useLayoutEffect(() => {
    const intro = introRef.current;
    const landing = landingRef.current;
    const p = pRef.current;

    let tl = gsap.timeline({
      scrollTrigger: {
        start: 'top+=10% top',
        pin: landing,
        trigger: landing,
        scrub: true,
      },
    });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: intro,
      },
    });

    gsap.set(intro, {
      y: '85%',
      scale: 0.8,
    });

    gsap.set(p, {
      opacity: 0.5,
    });

    tl.to(intro, {
      y: 0,
      scale: 1,
      backgroundColor: '#ffeccc',
    });

    tl2.to(p, {
      opacity: 1,
    });
  }, []);

  useLayoutEffect(() => {
    const skillSection = skillSectionRef.current;
    const title = skillSection.querySelector('h2');

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: skillSection,
        start: 'top center',
        markers: true,
        onEnter: () => {
          title.classList.add('text-stoke');
          gsap.to(title.querySelector('div'), {
            scaleX: 1,
          });
        },
      },
    });

    tl.to(title, {
      fontSize: '4rem',
      marginLeft: 0,
      marginRight: 'auto',
      ease: 'power3',
      color: '#1a191a',
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
          className='absolute left-0 top-0 mx-auto flex min-h-screen w-full translate-y-[90%] flex-col items-center justify-center rounded-2xl bg-secondary p-10 text-black'
        >
          <p
            className='text-4xl tracking-wider lg:text-5xl'
            data-hoverable='true'
            ref={pRef}
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
      <section ref={skillSectionRef} className='min-h-screen p-10'>
        <div className='container mb-8 flex'>
          <h2 className='group relative mx-auto block text-8xl font-bold text-primary'>
            MY SKILLS
            <div className='h-[2px] w-full scale-x-0 bg-primary transition-all group-hover:w-0'></div>
          </h2>
        </div>
        <div className='md:grid-cols-200 grid grid-cols-2 items-center justify-center gap-3'>
          {skill?.map((s) => (
            <SkillBox key={`${s.title}-key`} img={s.logo} title={s.title} />
          ))}
        </div>
      </section>
    </main>
  );
}
