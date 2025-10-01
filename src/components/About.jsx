function About() {
  return (
    <section id="learn-more" className="relative z-10 mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 shadow-2xl">
        <h2 className="text-3xl font-semibold sm:text-4xl">Myth vs. Lift</h2>
        <p className="mt-4 text-neutral-300">
          You may have heard the old line: “According to all known laws of
          aviation, there’s no way a bee should be able to fly.” It’s catchy—but
          incorrect. Bees absolutely obey the laws of physics. Their flight is
          powered by rapid wingbeats, complex aerodynamics, and clever body
          kinematics that generate sufficient lift and control even with small
          wings.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-medium text-yellow-300">Wingbeats</p>
            <p className="mt-1 text-sm text-neutral-300">Up to ~230 beats/sec creates dynamic airflow.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-medium text-yellow-300">Vortex Lift</p>
            <p className="mt-1 text-sm text-neutral-300">Leading-edge vortices add extra lift beyond steady flow.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-medium text-yellow-300">Control</p>
            <p className="mt-1 text-sm text-neutral-300">Body pitching and wing stroke angles enable agility.</p>
          </div>
        </div>
        <p className="mt-6 text-neutral-300">
          In short: bees don’t ignore aerodynamics—they master it. This site is
          a small celebration of that mastery, blending playful visuals with
          grounded design.
        </p>
      </div>
    </section>
  );
}

export default About;
