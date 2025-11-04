import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ReelsFeed from './components/ReelsFeed';
import BottomNav from './components/BottomNav';
import SearchExplore from './components/SearchExplore';
import ProfilePage from './components/ProfilePage';

function CreatePost({ onPosted }) {
  const [text, setText] = useState('');
  const limit = 280;
  const remaining = limit - text.length;

  return (
    <div className="h-full w-full bg-black text-white">
      <div className="max-w-md mx-auto px-6 pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-white/70">Draft</div>
          <button
            onClick={() => {
              if (text.trim()) onPosted?.(text);
            }}
            className="text-white/100"
          >
            Post
          </button>
        </div>
        <textarea
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write something precise and meaningful."
          className="w-full h-[60vh] bg-transparent resize-none outline-none placeholder-white/50 text-[22px] leading-tight font-light"
        />
        <div className="text-right text-xs text-[#8A8A8A]">{remaining}</div>
      </div>
    </div>
  );
}

function Messages() {
  const clusters = [
    { me: false, text: 'Welcome to Vero.' },
    { me: false, text: 'Keep it minimal.' },
    { me: true, text: 'Understood. Shipping clean.' },
  ];
  return (
    <div className="h-full w-full bg-black text-white">
      <div className="max-w-md mx-auto px-6 pt-8 pb-24 space-y-5">
        {clusters.map((c, i) => (
          <div key={i} className={`flex ${c.me ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] text-sm ${c.me ? 'text-white' : 'text-white/85'}`}>
              <div>{c.text}</div>
              <div className="text-[10px] text-[#8A8A8A] mt-1">2m ago</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Settings() {
  const items = ['Edit Profile', 'Account', 'Notifications', 'Security', 'Log Out'];
  return (
    <div className="h-full w-full bg-black text-white">
      <div className="max-w-md mx-auto px-6 pt-8">
        <ul className="divide-y divide-white/10">
          {items.map((it) => (
            <li key={it} className="py-4 text-sm">{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState('home');

  return (
    <div className="h-screen w-screen bg-black text-white">
      <AnimatePresence mode="wait">
        {tab === 'home' && (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ReelsFeed />
          </motion.div>
        )}
        {tab === 'search' && (
          <motion.div key="search" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SearchExplore />
          </motion.div>
        )}
        {tab === 'create' && (
          <motion.div key="create" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <CreatePost onPosted={() => setTab('home')} />
          </motion.div>
        )}
        {tab === 'messages' && (
          <motion.div key="messages" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Messages />
          </motion.div>
        )}
        {tab === 'profile' && (
          <motion.div key="profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ProfilePage />
          </motion.div>
        )}
        {tab === 'settings' && (
          <motion.div key="settings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Settings />
          </motion.div>
        )}
      </AnimatePresence>

      <BottomNav current={tab} onChange={setTab} />
    </div>
  );
}
