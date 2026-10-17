'use client';

import React, { useState, useEffect } from 'react';
import { IconWhatsApp, IconMenu, IconClose, IconCpu } from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/5511994158506?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20MTECH%20TI%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20manuten%C3%A7%C3%A3o.";

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo" id="nav-brand-logo">
          <div className="logo-icon-box">
            <IconCpu size={22} className="logo-svg" />
          </div>
          <div className="logo-text">
            <span className="logo-title">MTECH <span className="logo-accent">TI</span></span>
            <span className="logo-subtitle">MANUTENÇÃO & ELETRÔNICOS</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          <a href="#servicos" className="nav-link" id="nav-link-servicos">Serviços</a>
          <a href="#diferenciais" className="nav-link" id="nav-link-diferenciais">Diferenciais</a>
          <a href="#orcamento" className="nav-link" id="nav-link-orcamento">Orçamento Rápido</a>
          <a href="#faq" className="nav-link" id="nav-link-faq">Dúvidas</a>
          <a href="#contato" className="nav-link" id="nav-link-contato">Contato</a>
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp nav-btn"
            id="nav-btn-whatsapp"
          >
            <IconWhatsApp size={18} />
            <span>(11) 99415-8506</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle-btn"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Alternar menu"
          >
            {mobileMenuOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" id="mobile-drawer-menu">
          <nav className="mobile-nav-links">
            <a href="#servicos" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
            <a href="#diferenciais" onClick={() => setMobileMenuOpen(false)}>Diferenciais</a>
            <a href="#orcamento" onClick={() => setMobileMenuOpen(false)}>Orçamento Rápido</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)}>Dúvidas Frequentes</a>
            <a href="#contato" onClick={() => setMobileMenuOpen(false)}>Contato</a>
            <div className="mobile-cta-wrapper">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <IconWhatsApp size={18} />
                <span>Falar no WhatsApp: (11) 99415-8506</span>
              </a>
            </div>
          </nav>
        </div>
      )}

      <style jsx>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: all 0.3s ease;
          padding: 1.25rem 0;
          background: rgba(7, 9, 14, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .navbar-scrolled {
          padding: 0.85rem 0;
          background: rgba(7, 9, 14, 0.92);
          border-bottom: 1px solid rgba(0, 242, 254, 0.15);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .logo-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%);
          border: 1px solid rgba(0, 242, 254, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.2);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
          line-height: 1.1;
        }

        .logo-accent {
          background: var(--grad-cyan-blue);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .logo-subtitle {
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--text-dim);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 500;
          transition: color 0.2s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #ffffff;
        }

        .nav-link:hover::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--grad-cyan-blue);
          border-radius: 2px;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-btn {
          padding: 0.65rem 1.25rem;
          font-size: 0.9rem;
        }

        .mobile-toggle-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-main);
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-drawer {
          display: none;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }

          .mobile-toggle-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .nav-btn {
            display: none;
          }

          .mobile-drawer {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(11, 15, 25, 0.98);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border-subtle);
            padding: 1.5rem 1.5rem 2rem 1.5rem;
            animation: slideDown 0.3s ease;
          }

          .mobile-nav-links {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }

          .mobile-nav-links a {
            color: var(--text-main);
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 500;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .mobile-cta-wrapper {
            margin-top: 1rem;
          }

          .w-full {
            width: 100%;
          }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
