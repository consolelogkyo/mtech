'use client';

import React from 'react';
import { IconWhatsApp, IconPhone, IconMail, IconMapPin, IconClock, IconArrowRight, IconShieldCheck } from './Icons';

export default function ContactSection() {
  const whatsappUrl = "https://wa.me/5511994158506?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20MTECH%20TI%20e%20gostaria%20de%20falar%20com%20um%20especialista.";

  return (
    <section className="contact-section" id="contato">
      <div className="container">
        {/* Banner CTA Box */}
        <div className="glass-card cta-banner-card">
          <div className="cta-banner-content">
            <div className="status-pill mb-3">
              <span className="status-dot"></span>
              <span>Atendimento em Tempo Real</span>
            </div>
            <h2 className="cta-banner-title">
              Pronto para Recuperar seu Equipamento com a <span className="gradient-text">MTECH TI</span>?
            </h2>
            <p className="cta-banner-desc">
              Não perca tempo com assistências amadoras ou diagnósticos incorretos. Fale agora mesmo com quem entende de eletrônica e tecnologia de ponta.
            </p>
            <div className="cta-banner-btns">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp cta-large-btn"
                id="contact-cta-whatsapp"
              >
                <IconWhatsApp size={22} />
                <span>Conversar pelo WhatsApp: (11) 99415-8506</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="contact-cards-grid">
          {/* Card 1: WhatsApp Direto */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card contact-info-card card-whatsapp-link"
          >
            <div className="contact-icon-box bg-whatsapp">
              <IconWhatsApp size={24} />
            </div>
            <div>
              <div className="contact-card-label">WhatsApp Principal</div>
              <div className="contact-card-val">(11) 99415-8506</div>
              <div className="contact-card-sub">Clique para iniciar conversa imediata</div>
            </div>
          </a>

          {/* Card 2: Horário de Funcionamento */}
          <div className="glass-card contact-info-card">
            <div className="contact-icon-box">
              <IconClock size={24} />
            </div>
            <div>
              <div className="contact-card-label">Horário de Atendimento</div>
              <div className="contact-card-val">Seg a Sex: 08:30 - 18:30</div>
              <div className="contact-card-sub">Sábados: 09:00 às 13:00</div>
            </div>
          </div>

          {/* Card 3: Região de Atendimento */}
          <div className="glass-card contact-info-card">
            <div className="contact-icon-box">
              <IconMapPin size={24} />
            </div>
            <div>
              <div className="contact-card-label">Região de Cobertura</div>
              <div className="contact-card-val">São Paulo & Grande SP</div>
              <div className="contact-card-sub">Retirada, balcão e envios via Sedex</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 6rem 0;
          position: relative;
        }

        .cta-banner-card {
          padding: 4rem 3rem;
          text-align: center;
          margin-bottom: 3.5rem;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(13, 27, 42, 0.95) 100%);
          border: 1px solid rgba(0, 242, 254, 0.35);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(0, 242, 254, 0.15);
        }

        .cta-banner-content {
          max-width: 760px;
          margin: 0 auto;
        }

        .cta-banner-title {
          font-size: clamp(2.2rem, 3.8vw, 3.2rem);
          line-height: 1.15;
          margin-bottom: 1.25rem;
        }

        .cta-banner-desc {
          color: var(--text-muted);
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2.25rem;
        }

        .cta-banner-btns {
          display: flex;
          justify-content: center;
        }

        .cta-large-btn {
          padding: 1.1rem 2.5rem;
          font-size: 1.1rem;
        }

        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        .contact-info-card {
          padding: 1.75rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          text-decoration: none;
        }

        .card-whatsapp-link:hover {
          border-color: rgba(37, 211, 102, 0.4);
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.15);
        }

        .contact-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .contact-icon-box.bg-whatsapp {
          background: rgba(37, 211, 102, 0.15);
          border-color: rgba(37, 211, 102, 0.35);
          color: #25d366;
        }

        .contact-card-label {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text-dim);
          margin-bottom: 0.2rem;
        }

        .contact-card-val {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
        }

        .contact-card-sub {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        @media (max-width: 900px) {
          .contact-cards-grid {
            grid-template-columns: 1fr;
          }
          .cta-banner-card {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
