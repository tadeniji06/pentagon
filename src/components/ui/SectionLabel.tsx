import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
  number?: string;
}

export default function SectionLabel({
  children,
  className,
  light = false,
  number,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3',
        className
      )}
    >
      {number && (
        <span
          className={cn(
            'text-[10px] font-700 tracking-[0.22em] uppercase tabular-nums',
            light ? 'text-white/40' : 'text-[#C9A84C]'
          )}
        >
          {number}
        </span>
      )}
      <span
        className={cn(
          'text-[10px] font-semibold tracking-[0.22em] uppercase',
          light ? 'text-white/50' : 'text-[#98A2B3]'
        )}
      >
        {children}
      </span>
    </div>
  );
}
