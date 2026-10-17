'use client';

import React from 'react';
import { IconCpu, IconWhatsApp } from './Icons';

export default function Footer() {
  const whatsappUrl = "https://wa.me/5511994158506?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20MTECH%20TI.";

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <div className="logo-icon-box">
                <IconCpu size={20} />
              </div>
              <span className="logo-title">MTECH <span className="logo-accent">TI</span></span>
            </div>
            <p className="footer-tagline">
              Excelência técnica em manutenção, reparos avançados em microsoldagem BGA/SMD e soluções de TI corporativa.
            </p>
            <div className="footer-whatsapp-badge">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-wa-link"
              >
                <IconWhatsApp size={16} />
                <span>Atendimento WhatsApp: (11) 99415-8506</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navegação</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Início</a></li>
              <li><a href="#servicos">Nossos Serviços</a></li>
              <li><a href="#diferenciais">Diferenciais</a></li>
              <li><a href="#orcamento">Simulador de Orçamento</a></li>
              <li><a href="#faq">Dúvidas Frequentes</a></li>
              <li><a href="#contato">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Especialidades</h4>
            <ul className="footer-links-list">
              <li><a href="#servicos">Reparo de Notebooks & Mac</a></li>
              <li><a href="#servicos">Microsoldagem de Placas</a></li>
              <li><a href="#servicos">Desktops & PCs Gamer</a></li>
              <li><a href="#servicos">TI Corporativa & Redes</a></li>
              <li><a href="#servicos">Recuperação de Dados</a></li>
              <li><a href="#servicos">Consoles & Nobreaks</a></li>
            </ul>
          </div>

          {/* Assurance / Legal */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Garantia & Segurança</h4>
            <p className="footer-subtext">
              Todos os procedimentos técnicos são realizados com proteção antiestática (ESD) e acompanham termo de garantia legal de 90 dias.
            </p>
            <div className="footer-badge-pill">
              <span>Laudo Técnico &bull; Peças com Procedência</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} MTECH TI &bull; Manutenção de TI e Eletrônicos. Todos os direitos reservados.
          </p>
          <p className="legal-links">
            <a href="#contato">Termos de Atendimento</a> &bull; <a href="#faq">Política de Garantia</a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background: #04060a;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding: 5rem 0 2.5rem 0;
          color: var(--text-muted);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .logo-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(0, 242, 254, 0.15);
          border: 1px solid rgba(0, 242, 254, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
        }

        .logo-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          color: #ffffff;
        }

        .logo-accent {
          background: var(--grad-cyan-blue);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-tagline {
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          color: var(--text-muted);
        }

        .footer-whatsapp-badge {
          display: inline-block;
        }

        .footer-wa-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0.9rem;
          background: rgba(37, 211, 102, 0.1);
          border: 1px solid rgba(37, 211, 102, 0.25);
          border-radius: var(--radius-full);
          color: var(--whatsapp-green);
          font-size: 0.85rem;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .footer-wa-link:hover {
          background: rgba(37, 211, 102, 0.2);
          border-color: var(--whatsapp-green);
        }

        .footer-col-title {
          font-family: var(--font-heading);
          color: #ffffff;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          letter-spacing: -0.01em;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links-list a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }

        .footer-links-list a:hover {
          color: var(--accent-cyan);
        }

        .footer-subtext {
          font-size: 0.88rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .footer-badge-pill {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.2);
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
        }

        .footer-bottom-bar {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.82rem;
          color: var(--text-dim);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .legal-links a {
          color: var(--text-dim);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .legal-links a:hover {
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom-bar {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
