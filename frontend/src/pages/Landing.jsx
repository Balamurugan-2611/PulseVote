import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  BarChart3Icon,
  RadioIcon,
  Share2Icon,
  SquarePenIcon,
  VoteIcon,
} from 'lucide-react';
import { MarketingNav } from '../components/layout/MarketingNav';
import { Footer } from '../components/layout/Footer';
import { LivePollPreview } from '../components/poll/LivePollPreview';
import { buttonClasses } from '../components/ui/Button';
import { LiveIndicator } from '../components/ui/LiveIndicator';

const steps = [
  { number: '01', title: 'Create', text: 'Build your poll in seconds.', icon: <SquarePenIcon className="h-5 w-5" aria-hidden="true" /> },
  { number: '02', title: 'Share', text: 'Send your unique poll link to your audience.', icon: <Share2Icon className="h-5 w-5" aria-hidden="true" /> },
  { number: '03', title: 'Vote', text: 'Let your audience vote from any device.', icon: <VoteIcon className="h-5 w-5" aria-hidden="true" /> },
  { number: '04', title: 'Watch', text: 'See results update instantly without refreshing.', icon: <BarChart3Icon className="h-5 w-5" aria-hidden="true" /> },
];

export function Landing() {
  return (
    <div className="flex min-h-full w-full flex-col bg-canvas">
      <MarketingNav />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-16 lg:py-20">
          <div>
            <LiveIndicator note="Live polling" />
            <h1 className="mt-5 text-[40px] font-extrabold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-[56px]">
              Ask. Vote.
              <br />
              <span className="text-brand-400">See It Happen.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
              Launch a poll, share it instantly, and watch every response arrive live.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/signup" className={buttonClasses('primary', 'lg')}>
                Launch a Poll
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href="#how-it-works" className={buttonClasses('secondary', 'lg')}>
                Explore PulseVote
              </a>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">Responses delivered</dt>
                <dd className="mt-1 text-xl font-extrabold tracking-tight text-ink">In real time</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">Manual refreshes</dt>
                <dd className="mt-1 text-xl font-extrabold tracking-tight text-ink">None</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">Ready for</dt>
                <dd className="mt-1 text-xl font-extrabold tracking-tight text-ink">Every device</dd>
              </div>
            </dl>
          </div>

          <LivePollPreview />
        </section>

        {/* ── How it works ── */}
        <section id="how-it-works" className="scroll-mt-20 border-y border-line bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                Four steps from question to live results — no setup, no page reloads.
              </p>
            </div>

            <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <li key={step.number} className="flex flex-col bg-raised p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400">
                      {step.icon}
                    </span>
                    <span className="text-sm font-bold tabular-nums text-ink-subtle">{step.number}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-line bg-surface p-8 shadow-card sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <RadioIcon className="h-6 w-6 text-brand-400" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                Ready to create your first poll?
              </h2>
              <p className="mt-2 text-[15px] text-ink-muted">Make every vote count — in real time.</p>
            </div>
            <Link to="/signup" className={buttonClasses('primary', 'lg')}>
              Create a Poll
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
