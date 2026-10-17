'use client';

import React from 'react';
import { IconWhatsApp, IconZap, IconShieldCheck, IconCpu, IconArrowRight, IconCheckCircle, IconLaptop } from './Icons';

export default function Hero() {
  const whatsappUrl = "https://wa.me/5511994158506?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20e%20or%C3%A7amento%20para%20meu%20equipamento.";

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        {/* Left Column: Copy & Actions */}
        <div className="hero-content">
          <div className="status-pill hero-status">
            <span className="status-dot"></span>
            <span>Atendimento Imediato via WhatsApp &bull; SP e Grande SP</span>
          </div>

          <h1 className="hero-title">
            Manutenção Especializada em <span className="gradient-text">TI & Eletrônicos</span> de Alta Precisão
          </h1>

          <p className="hero-description">
            Recuperamos seu computador, notebook, servidor ou placa eletrônica com agilidade, peças originais e garantia formal. Da microsoldagem avançada à infraestrutura da sua empresa.
          </p>

          <div className="hero-actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp hero-btn-main"
              id="hero-cta-whatsapp"
            >
              <IconWhatsApp size={20} />
              <span>Solicitar Orçamento Grátis</span>
            </a>

            <a
              href="#orcamento"
              className="btn btn-outline"
              id="hero-cta-simulate"
            >
              <span>Simular Diagnóstico</span>
              <IconArrowRight size={18} />
            </a>
          </div>

          <div className="hero-trust-badges">
            <div className="trust-item">
              <IconShieldCheck size={18} className="text-cyan" />
              <span>Garantia de 90 dias</span>
            </div>
            <div className="trust-item">
              <IconZap size={18} className="text-cyan" />
              <span>Diagnóstico Rápido</span>
            </div>
            <div className="trust-item">
              <IconCheckCircle size={18} className="text-cyan" />
              <span>Atendimento PF e PJ</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Tech Display */}
        <div className="hero-visual">
          <div className="glass-card tech-diagnostic-card">
            <div className="card-top-bar">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="card-top-title">MTECH LAB &bull; PROTOCOLO DE TESTES</span>
            </div>

            <div className="diagnostic-display">
              <div className="device-header">
                <div className="device-icon-wrap">
                  <IconCpu size={28} />
                </div>
                <div>
                  <div className="device-label">Bancada de Testes Eletrônicos</div>
                  <div className="device-status">Calibração & Análise de Circuitos SMD/BGA</div>
                </div>
              </div>

              <div className="metrics-grid">
                <div className="metric-box">
                  <span className="metric-value">+5.000</span>
                  <span className="metric-name">Equipamentos Recuperados</span>
                </div>
                <div className="metric-box">
                  <span className="metric-value">99.2%</span>
                  <span className="metric-name">Taxa de Sucesso em Reparos</span>
                </div>
              </div>

              <div className="progress-checklist">
                <div className="check-item active">
                  <IconCheckCircle size={16} />
                  <span>Inspeção Óptica & Microscopia de Alta Resolução</span>
                </div>
                <div className="check-item active">
                  <IconCheckCircle size={16} />
                  <span>Análise Térmica & Medição de Linhas de Tensão</span>
                </div>
                <div className="check-item active">
                  <IconCheckCircle size={16} />
                  <span>Troca de Pastas Térmicas de Alto Desempenho</span>
                </div>
                <div className="check-item active">
                  <IconCheckCircle size={16} />
                  <span>Emissão de Laudo Técnico e Termo de Garantia</span>
                </div>
              </div>

              <div className="card-cta-footer">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-quote-link"
                >
                  <span>Chamar no WhatsApp agora: <strong>(11) 99415-8506</strong></span>
                  <IconArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding: 8.5rem 0 5rem 0;
          position: relative;
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
        }

        .hero-status {
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: clamp(2.4rem, 4.2vw, 3.75rem);
          line-height: 1.12;
          margin-bottom: 1.5rem;
        }

        .hero-description {
          color: var(--text-muted);
          font-size: 1.15rem;
          line-height: 1.65;
          margin-bottom: 2.25rem;
          max-width: 580px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 2.75rem;
        }

        .hero-btn-main {
          padding: 0.95rem 2rem;
          font-size: 1.05rem;
        }

        .hero-trust-badges {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1.75rem;
          padding-top: 1.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .text-cyan {
          color: var(--accent-cyan);
        }

        /* Diagnostic visual card */
        .tech-diagnostic-card {
          padding: 0;
          border: 1px solid rgba(0, 242, 254, 0.25);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 242, 254, 0.12);
        }

        .card-top-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.85rem 1.25rem;
          background: rgba(0, 0, 0, 0.4);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .terminal-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot-red { background: #ff5f56; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green { background: #27c93f; }

        .card-top-title {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--text-dim);
        }

        .diagnostic-display {
          padding: 1.75rem;
        }

        .device-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.75rem;
        }

        .device-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }

        .device-label {
          font-weight: 700;
          color: #ffffff;
          font-size: 1.05rem;
        }

        .device-status {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.75rem;
        }

        .metric-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-md);
          padding: 1rem;
        }

        .metric-value {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--accent-cyan);
          line-height: 1.1;
          margin-bottom: 0.25rem;
        }

        .metric-name {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.3;
        }

        .progress-checklist {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 1.75rem;
        }

        .check-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .check-item.active {
          color: #e2e8f0;
        }

        .check-item.active :global(svg) {
          color: #22c55e;
          flex-shrink: 0;
        }

        .card-cta-footer {
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .quick-quote-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--whatsapp-green);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }

        .quick-quote-link:hover {
          color: #4ade80;
          transform: translateX(3px);
        }

        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .hero-section {
            padding: 7rem 0 3.5rem 0;
          }
        }
      `}</style>
    </section>
  );
}
