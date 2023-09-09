import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const scrollToTarget = (target, offset = 0) => {
  gsap.to(window, {
    scrollTo: target,
    duration: 0.8,
    ease: 'linear',
  });
};

export { scrollToTarget };
