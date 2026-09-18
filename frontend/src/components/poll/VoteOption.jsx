import React from 'react';
import { twMerge } from 'tailwind-merge';
import { CheckIcon } from 'lucide-react';

export function VoteOption({ id, name, label, selected, disabled = false, onSelect }) {
  return (
    <label
      htmlFor={id}
      className={twMerge(
        'flex min-h-[60px] cursor-pointer items-center gap-3.5 rounded-xl border-2 bg-surface px-4 py-3.5 transition-[border-color,background-color,box-shadow] duration-150 ease-swift',
        selected
          ? 'border-brand-500 bg-brand-500/10 shadow-card'
          : 'border-line hover:border-brand-500/40 hover:bg-raised',
        disabled ? 'cursor-not-allowed opacity-60' : ''
      )}
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={label}
        checked={selected}
        disabled={disabled}
        onChange={onSelect}
        className="peer sr-only"
      />
      <span
        aria-hidden="true"
        className={twMerge(
          'flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-150 ease-swift peer-focus-visible:ring-4 peer-focus-visible:ring-brand-500/20',
          selected
            ? 'border-brand-500 bg-brand-500 text-white'
            : 'border-line-strong bg-raised'
        )}
      >
        {selected ? <CheckIcon className="h-3 w-3" strokeWidth={3} /> : null}
      </span>
      <span
        className={twMerge(
          'text-[15px] font-semibold',
          selected ? 'text-brand-300' : 'text-ink'
        )}
      >
        {label}
      </span>
    </label>
  );
}
