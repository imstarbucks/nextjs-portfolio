import { scrollToTarget } from '@/utils/scrollToTarget';

type Props = {
  className?: string;
};

const Nav: React.FC<Props> = (props) => {
  return (
    <nav className={props.className}>
      <button
        className='group relative mx-4 pb-2 pt-4 text-primary'
        onClick={() => scrollToTarget('#Skills')}
      >
        Skills
        <div className='absolute bottom-0 left-0 h-px w-0 bg-primary transition-all group-hover:w-full'></div>
      </button>
      <button
        className='group relative mx-4 pb-2 pt-4 text-primary'
        onClick={() => scrollToTarget('#Works')}
      >
        Works
        <div className='absolute bottom-0 left-0 h-px w-0 bg-primary transition-all group-hover:w-full'></div>
      </button>
      <button
        className='group relative mx-4 pb-2 pt-4 text-primary'
        onClick={() => scrollToTarget('#Contact')}
      >
        Contact
        <div className='absolute bottom-0 left-0 h-px w-0 bg-primary transition-all group-hover:w-full'></div>
      </button>
    </nav>
  );
};

export default Nav;
