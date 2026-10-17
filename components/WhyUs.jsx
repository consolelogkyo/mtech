'use client';

import React from 'react';
import { IconShieldCheck, IconCpu, IconFileText, IconZap } from './Icons';

const differentials = [
  {
    icon: IconCpu,
    title: 'Laboratório Técnico Avançado',
    desc: 'Bancadas equipadas com microscopia óptica de alta definição, osciloscópios digitais, estações de retrabalho BGA e fontes de precisão para diagnósticos cirúrgicos.'
  },
  {
    icon: IconShieldCheck,
    title: 'Garantia Formal de 90 Dias',
    desc: 'Total tranquilidade para você. Todos os serviços e peças substituídas contam com termo formal de garantia emitido em ordem de serviço detalhada.'
  },
  {
    icon: IconFileText,
    title: 'Transparência com Laudo e Fotos',
    desc: 'Nada de diagnósticos genéricos. Enviamos fotos e vídeos dos testes e dos componentes defeituosos diretamente no seu WhatsApp para total clareza.'
  },
  {
    icon: IconZap,
    title: 'Agilidade & Atendimento Ágil',
    desc: 'Sabemos que seu equipamento é essencial para seu trabalho ou lazer. Triagem rápida e diagnósticos objetivos para você não ficar parado.'
  }
];

export default function WhyUs() {
  return (
    <section className="whyus-section" id="diferenciais">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">POR QUE A MTECH TI?</div>
          <h2 className="section-title">
            O Padrão de Qualidade que seu <span className="gradient-text">Equipamento Merece</span>
          </h2>
          <p className="section-desc">
            Não terceirizamos nossos reparos. Cuidamos do seu patrimônio com procedimentos técnicos rigorosos e ferramentas de nível industrial.
          </p>
        </div>

        <div className="differentials-grid">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="glass-card diff-card">
                <div className="diff-icon-box">
                  <Icon size={26} />
                </div>
                <h3 className="diff-title">{item.title}</h3>
                <p className="diff-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .whyus-section {
          padding: 6rem 0;
          position: relative;
        }

        .differentials-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .diff-card {
          padding: 2.25rem 1.75rem;
          display: flex;
          flex-direction: column;
        }

        .diff-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(0, 242, 254, 0.1);
          border: 1px solid rgba(0, 242, 254, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          margin-bottom: 1.5rem;
        }

        .diff-title {
          font-size: 1.2rem;
          margin-bottom: 0.85rem;
          color: #ffffff;
          line-height: 1.25;
        }

        .diff-desc {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .differentials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .differentials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
