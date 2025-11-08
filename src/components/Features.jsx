import { Gauge, Zap, Sparkles } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: Gauge,
      title: 'Ultra-low profile',
      desc: 'A ground-hugging stance for maximum stability and cornering confidence.',
    },
    {
      icon: Zap,
      title: 'Instant torque',
      desc: 'Explosive acceleration that pins you to the seat the moment you touch the pedal.',
    },
    {
      icon: Sparkles,
      title: 'Red-lit cockpit',
      desc: 'Ambient red interior lighting creates a focused, futuristic driving aura.',
    },
  ];

  return (
    <section id="features" className="relative py-20 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Fused with speed</h2>
          <p className="mt-3 text-white/70">Designed for the night drive—minimal drag, maximum drama.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:bg-white/[0.08]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/20 ring-1 ring-red-500/30">
                <Icon className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
