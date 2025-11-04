import { useState, useMemo, useRef } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const postsSeed = [
  {
    user: 'Ava Laurent',
    role: 'Founder, Atelier 47',
    text:
      'Build products that remove friction, not add features. Precision over volume. Momentum over noise.',
  },
  {
    user: 'Noah Vero',
    role: 'Co-Founder, Vero',
    text:
      'Elegance is subtraction. If it doesn’t move the story forward, it doesn’t ship.',
  },
  {
    user: 'Mila Carver',
    role: 'CEO, Northline',
    text:
      'High trust comes from clarity. Say fewer words. Make stronger commitments. Deliver early.',
  },
  {
    user: 'Julian Park',
    role: 'Founder, Monolith',
    text:
      'Default to quality. The compound interest of taste is undefeated.',
  },
];

export default function ReelsFeed() {
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const touchStartY = useRef(null);

  const posts = useMemo(() => postsSeed, []);

  const next = () => setIndex((i) => (i + 1) % posts.length);
  const prev = () => setIndex((i) => (i - 1 + posts.length) % posts.length);

  const onWheel = (e) => {
    if (e.deltaY > 10) next();
    else if (e.deltaY < -10) prev();
  };

  const onTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e) => {
    const endY = e.changedTouches[0].clientY;
    const delta = endY - (touchStartY.current ?? endY);
    if (delta < -40) next();
    if (delta > 40) prev();
    touchStartY.current = null;
  };

  const current = posts[index];

  return (
    <div
      className="relative h-full w-full bg-black text-white overflow-hidden select-none"
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 flex flex-col items-center justify-center px-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <div className="w-full max-w-sm mx-auto">
            <div className="mb-4">
              <div className="text-white/100 text-sm tracking-wide">{current.user}</div>
              <div className="text-[#8A8A8A] text-xs mt-0.5">{current.role}</div>
            </div>
            <div className="leading-tight text-[28px] sm:text-[32px] font-light tracking-[0.01em]">
              {current.text}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute right-5 bottom-24 flex flex-col items-center gap-5">
        <button
          aria-label="Like"
          onClick={() => setLiked((v) => !v)}
          className="text-white/90 hover:text-white focus:outline-none"
        >
          <Heart strokeWidth={1} className={liked ? 'fill-white' : ''} />
        </button>
        <button aria-label="Comment" className="text-white/90 hover:text-white focus:outline-none">
          <MessageCircle strokeWidth={1} />
        </button>
        <button aria-label="Share" className="text-white/90 hover:text-white focus:outline-none">
          <Share2 strokeWidth={1} />
        </button>
      </div>

      <div className="absolute left-5 bottom-6 right-5">
        <div className="h-px bg-white/20 w-full" />
        <div
          className="h-[1px] bg-white mt-[2px] transition-all"
          style={{ width: `${((index + 1) / posts.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
