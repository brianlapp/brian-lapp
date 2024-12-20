const HeroBackground = () => (
  <>
    <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
    <div className="absolute right-0 top-0 -mt-24 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute left-0 bottom-0 -mb-24 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-3xl" />
  </>
);

export default HeroBackground;