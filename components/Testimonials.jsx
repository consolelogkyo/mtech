'use client';

import React from 'react';
import { IconStar } from './Icons';

const reviews = [
  {
    name: 'Carlos Eduardo Mendes',
    role: 'Engenheiro de Software & Gamer',
    equipment: 'Placa de Vídeo RTX 3080 & Notebook Dell',
    text: 'Minha GPU entrou em curto durante uma tempestade e três assistências deram como perda total. A equipe da MTECH TI identificou o mosfet queimado em 24h e ressuscitou a placa! Economizei mais de R$ 4.000.',
    rating: 5
  },
  {
    name: 'Mariana Silveira',
    role: 'Diretora Operacional na Apex Marketing',
    equipment: 'Contrato de TI & 15 Estações de Trabalho',
    text: 'Fechamos contrato de suporte corporativo com a MTECH TI. A velocidade de resposta e a organização no inventário e backups da nossa agência mudaram completamente nosso dia a dia. Altamente recomendados!',
    rating: 5
  },
  {
    name: 'Roberto Valente',
    role: 'Arquiteto e Designer',
    equipment: 'MacBook Pro M1 (Troca de Tela & Bateria)',
    text: 'Derrubei o MacBook e a tela ficou preta. Na autorizada o valor passava de um novo. Na MTECH TI fizeram a substituição com peça genuína e em 48h estava com ele pronto para entregar um projeto. Atendimento impecável pelo WhatsApp.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">DEPOIMENTOS</div>
          <h2 className="section-title">
            Quem Confia na <span className="gradient-text">MTECH TI</span> Recomenda
          </h2>
          <p className="section-desc">
            Veja a experiência real de clientes que recuperaram seus equipamentos com nosso time técnico.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((rev, index) => (
            <div key={index} className="glass-card testimonial-card">
              <div className="stars-row">
                {[...Array(rev.rating)].map((_, i) => (
                  <IconStar key={i} size={18} />
                ))}
              </div>

              <p className="testimonial-text">"{rev.text}"</p>

              <div className="testimonial-author">
                <div className="author-avatar">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div className="author-name">{rev.name}</div>
                  <div className="author-role">{rev.role}</div>
                  <div className="author-service">{rev.equipment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          padding: 6rem 0;
          position: relative;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        .testimonial-card {
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .stars-row {
          display: flex;
          gap: 4px;
          margin-bottom: 1.25rem;
        }

        .testimonial-text {
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.65;
          margin-bottom: 2rem;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .author-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--grad-cyan-blue);
          color: #07090e;
          font-weight: 800;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .author-name {
          font-weight: 700;
          color: #ffffff;
          font-size: 0.95rem;
        }

        .author-role {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .author-service {
          font-size: 0.72rem;
          color: var(--accent-cyan);
          font-weight: 500;
          margin-top: 2px;
        }

        @media (max-width: 990px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
