'use client';

import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import Image from 'next/image';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { skill, works } from '@/data/data';
import SkillBox from '@/components/skills';

import 'swiper/css';

export default function Home() {
  const mainRef = useRef(null);
  const landingRef = useRef(null);
  const introRef = useRef(null);
  const pRef = useRef(null);
  const skillSectionRef = useRef(null);
  const workSectionRef = useRef(null);
  const pinnerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

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
    const skillTitle = skillSection.querySelector('h2');

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: skillSection,
        start: 'top center',
        toggleActions: 'play reverse play reverse',
      },
    });

    gsap.set('.skillBox', {
      y: '100%',
      opacity: 0,
    });

    tl.to(skillTitle, {
      fontSize: '4rem',
      marginLeft: 0,
      marginRight: 'auto',
      ease: 'power3',
      color: '#1a191a',
    }).to(
      '.skillBox',
      {
        y: 0,
        opacity: 1,
        stagger: 0.025,
        ease: 'linear',
      },
      '<'
    );
  }, []);

  useLayoutEffect(() => {
    const works = workSectionRef.current;
    const worksTitle = works.querySelector('h2');

    const pinnerWrapper = pinnerRef.current;
    let pinWrapWidth = pinnerWrapper.offsetWidth;
    let horizontalLen = pinWrapWidth - window.innerWidth / 2;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: works,
        start: 'top center',
        end: pinWrapWidth,
        toggleActions: 'play reverse play reverse',
      },
    });

    tl.to(worksTitle, {
      fontSize: '20vw',
      bottom: 0,
      color: '#1a191a',
    }).to(mainRef.current, {
      backgroundColor: '#f3f6f2',
    });

    gsap.to(pinnerWrapper, {
      scrollTrigger: {
        scrub: true,
        trigger: workSectionRef.current,
        pin: true,
        start: 'top top',
        end: pinWrapWidth,
        markers: true,
        anticipatePin: 1,
      },
      x: -horizontalLen,
      ease: 'none',
    });
  }, []);

  return (
    <main ref={mainRef} className='relative min-h-screen bg-black text-primary'>
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
            className='text-4xl leading-5 tracking-wider lg:text-5xl'
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
      <section
        ref={skillSectionRef}
        className='flex min-h-screen flex-col items-center justify-center p-10'
      >
        <div className='container mb-8 flex'>
          <h2 className='text-stoke group relative mx-auto block text-8xl font-bold text-primary'>
            MY SKILLS
          </h2>
        </div>
        <div className='grid w-full grid-cols-2 items-center justify-center gap-3 md:grid-cols-200'>
          {skill?.map((s) => (
            <SkillBox key={`${s.title}-key`} img={s.logo} title={s.title} />
          ))}
        </div>
      </section>
      <section
        ref={workSectionRef}
        className='relative min-h-screen overflow-hidden p-10'
      >
        <h2 className='group absolute left-0 right-0 top-10 m-auto block h-fit w-fit select-none text-8xl font-bold text-primary'>
          MY WORKS
        </h2>
        <div className='absolute flex h-screen items-center'>
          <div
            ref={pinnerRef}
            className='flex h-[60%] min-h-[500px] shrink-0 grow translate-x-full items-center gap-10'
          >
            {works?.map((work, i) => (
              <>
                {
                  <Image
                    key={`${work.title}--key-${i}`}
                    className='h-full w-auto'
                    src={work.thumbnail}
                    alt={`${work.title} Thumbnail`}
                  />
                }
              </>
            ))}
            <div
              data-hoverable='true'
              className=' flex h-32 w-32 items-center justify-center rounded-full border border-white text-center text-2xl transition-all ease-in-out hover:scale-75 hover:bg-white hover:text-black'
            >
              View More
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
