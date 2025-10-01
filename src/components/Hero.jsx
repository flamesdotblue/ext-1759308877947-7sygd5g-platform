import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xa5cMvp2ipgnnda2/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-neutral-950/90" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
          Black and Yellow, Reimagined
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-200 sm:text-lg">
          A modern, interactive ode to the myth and marvel of bee flight—where
          design, motion, and science meet.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#learn-more"
            className="rounded-full bg-yellow-400 px-6 py-3 font-medium text-black shadow-lg shadow-yellow-500/20 transition hover:bg-yellow-300"
          >
            Learn More
          </a>
          <a
            href="#features"
            className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition hover:border-white/40 hover:bg-white/15"
          >
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
