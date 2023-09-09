'use client';

import Link from 'next/link';
import { works } from '@/data/data';
import Image from 'next/image';

export default function Work() {
  return (
    <main className='bg-black p-4'>
      <div className='relative'>
        <Link
          href={'/'}
          className='absolute bottom-0 left-0 top-0 m-auto flex items-center gap-3 text-primary transition-all hover:gap-6'
          data-hoverable='true'
        >
          <svg
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z'
              fill='currentColor'
              fill-rule='evenodd'
              clip-rule='evenodd'
            ></path>
          </svg>
          Back
        </Link>
        <h1 className='mx-auto mb-8 text-center text-4xl text-primary lg:text-8xl'>
          My Works
        </h1>
      </div>
      <section className=''>
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
          {works?.map((work) => (
            <div className=''>
              <Link key={`${work.title}-full`} href={work.link} target='_blank'>
                <Image src={work.thumbnail} alt='Thumb' data-hoverable='true' />
              </Link>
              <div className='text-primary'>
                <div className='my-6 flex items-center justify-between'>
                  <span className='text-lg'>Project: {work.title}</span>
                  <Link href={work.link}>
                    <svg
                      width='15'
                      height='15'
                      viewBox='0 0 15 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-[20px] w-[20px]'
                    >
                      <path
                        d='M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z'
                        fill='currentColor'
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                      ></path>
                      <path
                        d='M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z'
                        fill='currentColor'
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                      ></path>
                      <path
                        d='M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z'
                        fill='currentColor'
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                      ></path>
                      <path
                        d='M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z'
                        fill='currentColor'
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                  </Link>
                </div>
                <div className='flex'>
                  <span>Skills:</span>
                  <ul className='flex w-[95%] flex-wrap'>
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
              </div>
            </div>
          ))}
        </div>
        <Link
          href={'/works'}
          data-hoverable='true'
          className=' mx-auto my-8 flex h-32 w-32 items-center justify-center rounded-full border border-white text-center text-2xl text-primary transition-all ease-in-out hover:scale-75 hover:bg-white hover:text-black'
        >
          Back
        </Link>
      </section>
    </main>
  );
}
