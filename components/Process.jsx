'use client';

import React from 'react';
import { IconCheckCircle } from './Icons';

const steps = [
  {
    step: '01',
    title: 'Contato & Triagem',
    desc: 'Fale conosco pelo WhatsApp (11) 99415-8506, relate o defeito e receba as primeiras orientações sobre envio ou entrega do aparelho.'
  },
  {
    step: '02',
    title: 'Diagnóstico Técnico',
    desc: 'Análise minuciosa em bancada com testes elétricos e térmicos. Emitimos orçamento detalhado sem surpresas para sua aprovação.'
  },
  {
    step: '03',
    title: 'Reparo com Peças Originais',
    desc: 'Após aprovado, nossos especialistas realizam o conserto ou troca de componentes seguindo as melhores normas de engenharia e segurança.'
  },
  {
    step: '04',
    title: 'Testes de Estresse & Entrega',
    desc: 'O equipamento passa por estresse térmico e operacional por horas para garantir 100% de estabilidade. Retirada ou envio com garantia formal.'
  }
];

export default function Process() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">COMO FUNCIONA</div>
          <h2 className="section-title">
            Processo Simples, Rápido e <span className="gradient-text">100% Seguro</span>
          </h2>
          <p className="section-desc">
            Saiba passo a passo como tratamos o seu equipamento desde o primeiro contato até a entrega final com garantia.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((item, index) => (
            <div key={index} className="process-step-item">
              <div className="step-number-wrap">
                <span className="step-badge-circle">{item.step}</span>
                {index < steps.length - 1 && <div className="step-connector"></div>}
              </div>
              <h3 className="process-step-title">{item.title}</h3>
              <p className="process-step-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .process-section {
          padding: 6rem 0;
          background: rgba(13, 18, 31, 0.4);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          position: relative;
        }

        .process-step-item {
          display: flex;
          flex-direction: column;
        }

        .step-number-wrap {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .step-badge-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(0, 242, 254, 0.1);
          border: 2px solid var(--accent-cyan);
          color: var(--accent-cyan);
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.25);
          flex-shrink: 0;
          z-index: 2;
        }

        .step-connector {
          position: absolute;
          top: 50%;
          left: 50px;
          right: -2rem;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-cyan), rgba(0, 242, 254, 0.15));
          z-index: 1;
        }

        .process-step-title {
          font-size: 1.2rem;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }

        .process-step-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 960px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }

          .step-connector {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .process-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
