interface GhostNumberProps {
  number: string;
}

const GhostNumber = ({ number }: GhostNumberProps) => (
  <span
    className="absolute select-none pointer-events-none font-black text-parchment leading-none"
    style={{
      fontSize: 'clamp(8rem, 20vw, 16rem)',
      opacity: 0.03,
      top: '-0.15em',
      left: '-0.05em',
      lineHeight: 1,
    }}
  >
    {number}
  </span>
);

export default GhostNumber;
