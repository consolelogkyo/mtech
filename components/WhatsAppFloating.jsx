'use client';

import React from 'react';
import { IconWhatsApp } from './Icons';

export default function WhatsAppFloating() {
  const whatsappUrl = "https://wa.me/5511994158506?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20MTECH%20TI%20e%20gostaria%20de%20um%20or%C3%A7amento%20r%C3%A1pido.";

  return (
    <aside aria-label="Atendimento Rápido via WhatsApp">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating"
        id="floating-whatsapp-btn"
        title="Falar com a MTECH TI no WhatsApp"
      >
        <div className="wa-icon-container">
          <IconWhatsApp size={24} />
          <span className="wa-unread-badge">1</span>
        </div>
        <span>Orçamento WhatsApp</span>
      </a>

      <style jsx>{`
        .wa-icon-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wa-unread-badge {
          position: absolute;
          top: -6px;
          right: -8px;
          background: #ef4444;
          color: #ffffff;
          font-size: 0.7rem;
          font-weight: 800;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #25d366;
        }
      `}</style>
    </aside>
  );
}
