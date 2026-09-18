import React, { useCallback, useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { DownloadIcon, RefreshCwIcon } from 'lucide-react';

export function QRCodeCard({ url, size = 200 }) {
  const canvasRef = useRef(null);
  const [error, setError] = useState(false);
  const [rendered, setRendered] = useState(false);

  const render = useCallback(() => {
    if (!canvasRef.current || !url) return;
    setError(false);
    setRendered(false);
    QRCode.toCanvas(canvasRef.current, url, {
      width: size,
      margin: 2,
      color: {
        dark: '#F8FAFC',   // ink — light bars on dark bg
        light: '#1C2638',   // raised — dark background
      },
      errorCorrectionLevel: 'M',
    })
      .then(() => setRendered(true))
      .catch(() => setError(true));
  }, [url, size]);

  useEffect(() => { render(); }, [render]);

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = `pulsevote-qr-${Date.now()}.png`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  return (
    <figure className="flex flex-col items-center gap-4 rounded-xl border border-line bg-surface p-5">
      <div className="relative">
        <canvas
          ref={canvasRef}
          aria-label={`QR code for ${url}`}
          role="img"
          className={[
            'rounded-lg border border-line transition-opacity duration-300',
            rendered ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          style={{ width: size, height: size }}
        />

        {/* Skeleton while rendering */}
        {!rendered && !error && (
          <div
            className="absolute inset-0 rounded-lg animate-skeleton-sweep"
            style={{
              backgroundImage: 'linear-gradient(90deg,#1C2638 25%,#243044 50%,#1C2638 75%)',
              backgroundSize: '200% 100%',
            }}
          />
        )}

        {/* Error state */}
        {error && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-lg border border-danger-100 bg-danger-50 text-danger-500"
            style={{ width: size, height: size }}
          >
            <RefreshCwIcon className="h-5 w-5" />
            <button type="button" onClick={render} className="text-xs font-semibold underline">
              Retry
            </button>
          </div>
        )}
      </div>

      <figcaption className="flex w-full flex-col items-center gap-3">
        <p className="max-w-full truncate text-center text-xs text-ink-muted" title={url}>
          {url}
        </p>

        {rendered && (
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 rounded-lg border border-line-strong bg-raised px-3 py-1.5 text-xs font-semibold text-ink shadow-card transition-colors duration-150 ease-swift hover:bg-brand-500/10 hover:border-brand-500/40 hover:text-brand-400"
          >
            <DownloadIcon className="h-3.5 w-3.5" aria-hidden="true" />
            Download PNG
          </button>
        )}

        <p className="text-center text-xs text-ink-subtle">
          Scan with any phone camera to open the poll
        </p>
      </figcaption>
    </figure>
  );
}
