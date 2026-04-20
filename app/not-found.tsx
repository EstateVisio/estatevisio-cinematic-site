import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-charcoal flex flex-col items-center justify-center px-8 text-center">
      <p className="font-display text-[10rem] leading-none text-gold/20 font-light select-none">404</p>
      <h1 className="font-display text-[clamp(2rem,5vw,5rem)] font-light italic text-cloud-white mt-4">
        Page not found.
      </h1>
      <div className="mt-8 h-px w-16 bg-gold/30" />
      <Link
        href="/"
        className="mt-8 px-8 py-4 bg-gold text-charcoal text-sm tracking-[0.1em] uppercase font-medium hover:bg-gold/85 transition-colors duration-300"
      >
        Back to home
      </Link>
    </div>
  );
}
