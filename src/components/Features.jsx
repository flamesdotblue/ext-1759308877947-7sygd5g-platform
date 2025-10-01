import { Rocket, Star, Shield, Settings } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Interactive Hero',
    desc: 'A 3D honeycomb-inspired scene that responds in real time.',
  },
  {
    icon: Star,
    title: 'Polished Aesthetics',
    desc: 'Crisp typography and a bold color system: black, yellow, and gold.',
  },
  {
    icon: Shield,
    title: 'Accessible by Design',
    desc: 'Contrast-aware components and keyboard-friendly navigation.',
  },
  {
    icon: Settings,
    title: 'Composable Components',
    desc: 'Small, focused building blocks for clarity and reuse.',
  },
];

function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-semibold sm:text-4xl">Built for Flow</h2>
        <p className="mt-3 text-neutral-300">
          A clean, modular foundation that lets you move fast without breaking
          the honeycomb.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/20 text-yellow-300 ring-1 ring-yellow-300/30">
              <f.icon size={20} />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
