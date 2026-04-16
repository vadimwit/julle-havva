interface WaveDividerProps {
  topColor?: string;
  bottomColor?: string;
  angle?: number;
  ornament?: boolean;
  hidden?: boolean;
}

/**
 * Thin section divider — a barely-there angled gold line.
 * Use hidden={true} for seamless dark-to-dark transitions.
 */
export default function WaveDivider({ angle = 0, ornament = false, hidden = false }: WaveDividerProps) {
  if (hidden) return null;

  return (
    <div className="py-6 overflow-hidden bg-cream-50" aria-hidden="true">
      <div
        className="flex items-center gap-5 px-16"
        style={{ transform: `rotate(${angle}deg)` }}
      >
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-600/25 to-transparent" />
        {ornament && (
          <span className="text-gold-500/35 text-[10px]">✦</span>
        )}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold-600/25 to-transparent" />
      </div>
    </div>
  );
}
