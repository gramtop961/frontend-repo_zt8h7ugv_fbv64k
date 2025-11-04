import { useState } from 'react';

const sample = [
  { name: 'Ava Laurent', role: 'Founder, Atelier 47' },
  { name: 'Noah Vero', role: 'Co-Founder, Vero' },
  { name: 'Mila Carver', role: 'CEO, Northline' },
  { name: 'Julian Park', role: 'Founder, Monolith' },
];

export default function SearchExplore() {
  const [q, setQ] = useState('');

  const results = sample.filter(
    (r) => r.name.toLowerCase().includes(q.toLowerCase()) || r.role.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="h-full w-full bg-black text-white">
      <div className="max-w-md mx-auto px-6 pt-6">
        <div className="mb-6">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search founders, companies, posts"
            className="w-full bg-transparent text-white placeholder-white/80 outline-none border-b border-white/80 pb-2"
          />
        </div>

        <div className="flex flex-col divide-y divide-white/10">
          {results.map((r, i) => (
            <div key={i} className="flex items-center gap-4 py-3">
              <div className="w-8 h-8 rounded-full border border-white/80" />
              <div className="flex-1">
                <div className="text-sm">{r.name}</div>
                <div className="text-xs text-[#8A8A8A] mt-0.5">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
