import type { ReactNode } from 'react';

interface ControlProps {
  id: string;
  'aria-invalid': boolean;
  'aria-describedby': string | undefined;
  'aria-required': true;
}

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  hint?: ReactNode;
  children: (control: ControlProps) => ReactNode;
}

export function FormField({ id, label, error, hint, children }: FormFieldProps) {
  const describedBy = [error && `${id}-error`, hint && `${id}-hint`].filter(Boolean).join(' ') || undefined;

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-fg">
        {label}
      </label>
      {children({ id, 'aria-invalid': Boolean(error), 'aria-describedby': describedBy, 'aria-required': true })}
      <div className="flex justify-between gap-4">
        {error && (
          <p id={`${id}-error`} className="mt-1.5 text-[0.8125rem] leading-snug text-[#b42318]">
            {error}
          </p>
        )}
        {hint && (
          <p id={`${id}-hint`} className="mt-1.5 ml-auto shrink-0 text-[0.8125rem] text-fg-subtle">
            {hint}
          </p>
        )}
      </div>
    </div>
  );
}
