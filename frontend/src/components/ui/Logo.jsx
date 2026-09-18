import React from 'react';
import { twMerge } from 'tailwind-merge';

/** PulseVote wordmark + pulse-bars icon. */
export function Logo({ className, compact = false }) {
  return (
    <span className={twMerge('inline-flex items-center gap-2.5', className)}>
      {/* Icon badge — violet bg, white bars */}
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-white">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none">
          <path
            d="M4 17V10M8 17V6M12 17v-7M16 17v-4M20 17v-8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>

      {compact ? null : (
        <span className="text-[17px] font-extrabold tracking-tight text-ink">
          Pulse<span className="text-brand-500">Vote</span>
        </span>
      )}
    </span>
  );
}
