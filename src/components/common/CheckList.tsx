import { Check } from 'lucide-react';
import { cn } from '@/utils/cn';

export function CheckList({ items, className }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={cn('space-y-3', className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[0.9375rem] leading-snug text-fg-muted">
          <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2.5} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
