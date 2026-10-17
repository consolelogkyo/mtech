'use client';

import React from 'react';

const brands = [
  'DELL', 'APPLE', 'LENOVO', 'HP', 'ASUS', 'ACER', 
  'INTEL', 'AMD RYZEN', 'NVIDIA', 'CISCO', 'MIKROTIK', 
  'SAMSUNG', 'WESTERN DIGITAL', 'KINGSTON', 'SONY'
];

export default function BrandTicker() {
  return (
    <section className="brand-ticker-section">
      <div className="container">
        <p className="ticker-label">ESPECIALISTAS NAS PRINCIPAIS MARCAS E TECNOLOGIAS DO MERCADO</p>
        <div className="ticker-track-wrapper">
          <div className="ticker-track">
            {brands.concat(brands).map((brand, index) => (
              <div key={index} className="ticker-item">
                <span className="ticker-dot">&bull;</span>
                <span className="ticker-text">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .brand-ticker-section {
          padding: 2.5rem 0;
          background: rgba(13, 18, 31, 0.6);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .ticker-label {
          text-align: center;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--text-dim);
          margin-bottom: 1.5rem;
        }

        .ticker-track-wrapper {
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .ticker-track {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          width: max-content;
          animation: scrollTicker 35s linear infinite;
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }

        .ticker-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          white-space: nowrap;
        }

        .ticker-dot {
          color: var(--accent-cyan);
          font-size: 1.2rem;
        }

        .ticker-text {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          transition: color 0.2s ease;
        }

        .ticker-text:hover {
          color: #ffffff;
        }

        @keyframes scrollTicker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
