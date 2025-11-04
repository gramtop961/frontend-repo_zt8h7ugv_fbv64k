export default function ProfilePage() {
  return (
    <div className="h-full w-full bg-black text-white">
      <div className="max-w-md mx-auto px-6 pt-10 pb-24">
        <div className="mb-6">
          <div className="text-2xl font-light">Ava Laurent</div>
          <div className="text-[#8A8A8A] mt-1">Founder, Atelier 47</div>
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-white/90">
            <span className="px-2 py-1 rounded-full border border-white/40">Founder Tier</span>
          </div>
        </div>

        <div className="flex items-center gap-6 mb-10">
          <div className="text-sm"><span className="text-white">12.4k</span> Followers</div>
          <div className="text-sm"><span className="text-white">418</span> Following</div>
          <div className="text-sm"><span className="text-white">86</span> Posts</div>
        </div>

        <section className="space-y-8">
          <div>
            <h3 className="uppercase tracking-wider text-xs text-white/70 mb-3">About</h3>
            <p className="text-sm leading-relaxed text-white/90">
              Building tools for meticulous founders. Focused on reduction, signal, and durable craft.
            </p>
          </div>
          <div>
            <h3 className="uppercase tracking-wider text-xs text-white/70 mb-3">Experience</h3>
            <ul className="space-y-3 text-sm text-white/90">
              <li>Founder & CEO — Atelier 47</li>
              <li>Product Design — Kestrel Labs</li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase tracking-wider text-xs text-white/70 mb-3">Posts</h3>
            <div className="space-y-6">
              <p className="text-[15px] leading-tight font-light">
                Precision is the most underrated growth strategy.
              </p>
              <p className="text-[15px] leading-tight font-light">
                Choose constraints that make the product inevitable.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
