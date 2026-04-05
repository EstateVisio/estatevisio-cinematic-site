interface MarqueeProps {
  text: string;
  speed?: string;
}

const Marquee = ({ text, speed = '30s' }: MarqueeProps) => {
  const repeated = `${text} · ${text} · ${text} · ${text} · `;
  return (
    <div className="overflow-hidden border-y border-parchment/10 py-4 bg-noir-surface">
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{ animationDuration: speed }}
      >
        <span className="text-xs tracking-[0.4em] uppercase text-parchment/40 pr-8">{repeated}</span>
        <span className="text-xs tracking-[0.4em] uppercase text-parchment/40 pr-8">{repeated}</span>
      </div>
    </div>
  );
};

export default Marquee;
