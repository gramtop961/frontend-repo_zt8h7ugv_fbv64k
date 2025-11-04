import { Home, Search, Plus, MessageCircle, User } from 'lucide-react';

export default function BottomNav({ current, onChange }) {
  const Item = ({ id, children, label }) => (
    <button
      onClick={() => onChange(id)}
      className={`flex flex-col items-center justify-center gap-1 px-3 py-2 text-xs tracking-wide ${
        current === id ? 'text-white' : 'text-white/70'
      }`}
      aria-label={label}
    >
      {children}
      <span className="sr-only">{label}</span>
    </button>
  );

  return (
    <nav className="fixed bottom-3 left-0 right-0 flex items-center justify-around mx-auto max-w-md">
      <div className="w-full mx-4 px-2 py-2 flex items-center justify-around rounded-full bg-white/0">
        <Item id="home" label="Home">
          <Home strokeWidth={1} />
        </Item>
        <Item id="search" label="Search">
          <Search strokeWidth={1} />
        </Item>
        <Item id="create" label="Create">
          <Plus strokeWidth={1} size={28} />
        </Item>
        <Item id="messages" label="Messages">
          <MessageCircle strokeWidth={1} />
        </Item>
        <Item id="profile" label="Profile">
          <User strokeWidth={1} />
        </Item>
      </div>
    </nav>
  );
}
