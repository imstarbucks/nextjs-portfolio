import Image from 'next/image';

const SkillBox = ({ img, title }) => {
  return (
    <div
      className='group flex h-[200px] w-full flex-col items-center justify-center rounded-lg bg-tertiary p-10 transition-all ease-in-out md:bg-secondary md:hover:bg-tertiary'
      data-hoverable='true'
    >
      <Image
        className='mb-5 h-auto w-12 transition-all ease-in-out md:grayscale md:group-hover:grayscale-0'
        src={img}
        alt='Brand Logo'
      />
      <h3 className='text-center text-2xl text-black transition-all ease-in-out md:text-black/50 md:group-hover:text-black'>
        {title}
      </h3>
    </div>
  );
};

export default SkillBox;
