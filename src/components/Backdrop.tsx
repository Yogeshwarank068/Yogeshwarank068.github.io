/** Ambient drifting gradient spheres behind everything. */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#07070d]" />
      <div className="absolute -left-40 top-[-10%] h-[38rem] w-[38rem] rounded-full bg-primary/20 blur-[140px] animate-[pulse_9s_ease-in-out_infinite]" />
      <div className="absolute right-[-15%] top-[25%] h-[32rem] w-[32rem] rounded-full bg-accent/25 blur-[150px] animate-[pulse_11s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-20%] left-[25%] h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-[160px] animate-[pulse_13s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_35%,#050508_95%)]" />
    </div>
  );
}
