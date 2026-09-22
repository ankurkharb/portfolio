/**
 * The Brand of Sacrifice, drawn in the current text colour.
 *
 * Three strokes: the centre line (spiked at the top), and two arms that hook
 * outward at the top, cross above the middle and close into a diamond whose
 * lowest point meets the centre line.
 */
export default function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      >
        <path d="M50 14 L50 88" />
        <path d="M37 10 L26 22 L74 64 L50 95" />
        <path d="M63 10 L74 22 L26 64 L50 95" />
        <path d="M44 16 L50 11 L56 16" strokeWidth="3" />
      </g>
      {/* Spike crowning the centre line. */}
      <path d="M46.6 16 L50 2 L53.4 16 Z" fill="currentColor" />
    </svg>
  );
}
