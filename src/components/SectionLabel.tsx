interface SectionLabelProps {
  number: string;
  label: string;
}

const SectionLabel = ({ number, label }: SectionLabelProps) => (
  <div className="flex items-center gap-4 mb-16">
    <span className="text-xs tracking-[0.4em] uppercase text-gold">{number}</span>
    <div className="w-8 h-px bg-gold/40" />
    <span className="text-xs tracking-[0.4em] uppercase text-parchment/40">{label}</span>
  </div>
);

export default SectionLabel;
