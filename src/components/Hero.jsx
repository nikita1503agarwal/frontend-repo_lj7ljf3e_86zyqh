import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Futuristic Performance</p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold leading-tight">
            A new class of motion
          </h1>
          <p className="mt-4 text-white/70 max-w-xl">
            Sleek, dark, and engineered for pure velocity. Feel the glow of the red interior as you surge down the open road.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#features" className="inline-flex items-center rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-600/30 hover:bg-red-500 transition-colors">Explore</a>
            <a href="#specs" className="inline-flex items-center rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/5 transition-colors">View Specs</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950/90 via-neutral-950/60 to-transparent" />
    </section>
  );
}
