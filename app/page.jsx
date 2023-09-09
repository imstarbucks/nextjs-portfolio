'use client';

import React, { useRef, useLayoutEffect, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { skill, works } from '@/data/data';
import Nav from '@/components/nav';
import SkillBox from '@/components/skills';

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

    let mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
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
          anticipatePin: 1,
        },
        x: -horizontalLen,
        ease: 'none',
      });
    });
  }, []);

  return (
    <main ref={mainRef} className='relative min-h-screen bg-black text-primary'>
      <Nav className='absolute left-0 top-0 z-50 flex w-screen justify-center bg-transparent p-4 text-primary' />
      <section
        ref={landingRef}
        className='container relative flex h-screen items-center justify-center'
      >
        <h1 className='group relative text-4xl font-extrabold md:text-6xl lg:text-8xl'>
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
            className='text-2xl tracking-wider md:text-4xl lg:text-5xl'
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
        id='Skills'
        className='my-8 flex min-h-screen flex-col items-center justify-center px-3 md:my-0 md:p-10'
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
        id='Works'
        className='relative min-h-screen overflow-hidden px-3 md:p-10'
      >
        <h2 className='group left-0 right-0 top-10 m-auto block h-fit w-fit select-none text-[4rem] font-bold text-primary md:absolute md:text-8xl'>
          MY WORKS
        </h2>
        <div className='bottom-0 top-0 my-auto flex items-center md:absolute md:h-screen'>
          <div
            ref={pinnerRef}
            className='flex h-[60%] min-h-[500px] shrink-0 grow flex-col items-center gap-10 md:translate-x-full md:flex-row'
          >
            {works?.slice(0, 5).map((work, i) => (
              <Link
                href={work.link}
                target='_blank'
                key={`${work.title}--key-${i}`}
                className='group relative w-full overflow-hidden md:h-full md:w-auto'
              >
                {
                  <>
                    <div className='absolute left-0 top-0 z-10 flex h-full w-full -translate-y-full flex-col items-center justify-center bg-black text-white transition-all group-hover:translate-y-0'>
                      <h3 className='mb-3 text-xl md:text-4xl'>{work.title}</h3>
                      <ul className='flex max-w-[90%] flex-wrap items-center justify-center'>
                        <p>Skills:</p>
                        {work.skills?.map((skill, i) => (
                          <li className='group' key={skill + i}>
                            <span className='mx-3 inline-block'>{skill}</span>

                            <span className='mx-3 text-white group-last:hidden'>
                              |
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Image
                      key={`${work.title}--key-${i}`}
                      className='h-auto w-[95vw] md:h-full md:w-auto'
                      src={work.thumbnail}
                      alt={`${work.title} Thumbnail`}
                    />
                  </>
                }
              </Link>
            ))}
            <Link
              href={'/works'}
              data-hoverable='true'
              className=' flex h-32 w-32 items-center justify-center rounded-full border border-white text-center text-2xl transition-all ease-in-out hover:scale-75 hover:bg-white hover:text-black'
            >
              View More
            </Link>
          </div>
        </div>
      </section>
      <section className='container flex flex-col items-center justify-center py-12 md:flex-row'>
        <h2 className='lg::max-w-[40%] mb-6 text-5xl font-bold text-secondary md:mb-0 lg:text-[8vw]'>
          Connect With Me
        </h2>
        <div className='w-full'>
          <a
            href={'mailto:spenwong98@gmail.com'}
            target='_blank'
            className='group relative block w-full overflow-hidden border-t border-primary px-4 py-8 text-2xl transition-all last:border-b hover:text-black md:text-4xl'
            data-hoverable='true'
          >
            <div className='pointer-events-none absolute left-0 top-0 z-0 h-full w-full -translate-x-full  bg-tertiary transition-all group-hover:translate-x-0'></div>
            <span className='relative z-10'>Email</span>
          </a>
          <Link
            href={'https://www.linkedin.com/in/spencer-wong-8946b6127/'}
            target='_blank'
            className='group relative block w-full overflow-hidden border-t border-primary px-4 py-8 text-2xl transition-all last:border-b hover:text-black md:text-4xl'
            data-hoverable='true'
          >
            <div className='pointer-events-none absolute left-0 top-0 z-0 h-full w-full -translate-x-full  bg-tertiary transition-all group-hover:translate-x-0'></div>
            <span className='relative z-10'>LinkedIn</span>
          </Link>
          <Link
            href={'https://github.com/imstarbucks'}
            target='_blank'
            className='group relative block w-full overflow-hidden border-t border-primary px-4 py-8 text-2xl transition-all last:border-b hover:text-black md:text-4xl'
            data-hoverable='true'
          >
            <div className='pointer-events-none absolute left-0 top-0 z-0 h-full w-full -translate-x-full  bg-tertiary transition-all group-hover:translate-x-0'></div>
            <span className='relative z-10'>Github</span>
          </Link>
          <Link
            href={'https://www.instagram.com/spenwong/'}
            target='_blank'
            className='group relative block w-full overflow-hidden border-t border-primary px-4 py-8 text-2xl transition-all last:border-b hover:text-black md:text-4xl'
            data-hoverable='true'
          >
            <div className='pointer-events-none absolute left-0 top-0 z-0 h-full w-full -translate-x-full  bg-tertiary transition-all group-hover:translate-x-0'></div>
            <span className='relative z-10'>Instagram</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
