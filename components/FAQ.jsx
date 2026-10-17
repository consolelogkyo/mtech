'use client';

import React, { useState } from 'react';
import { IconChevronDown } from './Icons';

const faqs = [
  {
    q: 'Quanto tempo leva para ficar pronto o diagnóstico?',
    a: 'Em média, nosso diagnóstico técnico completo leva entre 24 e 48 horas úteis. Assim que os testes de bancada forem concluídos, enviamos o laudo detalhado e os valores exatos pelo WhatsApp para sua prévia aprovação.'
  },
  {
    q: 'Como funciona a garantia dos serviços da MTECH TI?',
    a: 'Oferecemos garantia de 90 dias para todos os reparos realizados e componentes substituídos, além da garantia de fábrica para peças novas (que pode chegar a 12 meses). Tudo documentado em Ordem de Serviço formal.'
  },
  {
    q: 'Vocês realizam conserto de placas que outras assistências disseram não ter reparo?',
    a: 'Sim! Grande parte do nosso volume de laboratório vem de placas-mãe, placas de vídeo (GPUs) e MacBooks condenados por assistências tradicionais que apenas trocam o conjunto completo. Nós realizamos microsoldagem, reballing e substituição de componentes SMD/BGA.'
  },
  {
    q: 'Atendem empresas (Pessoa Jurídica) com emissão de Nota Fiscal?',
    a: 'Com certeza. Emitimos Nota Fiscal Eletrônica (NF-e) de serviço e produtos para todas as ordens. Também oferecemos contratos mensais de suporte preventivo/corretivo de TI com faturamento corporativo e SLA ágil.'
  },
  {
    q: 'Como posso entregar meu equipamento para avaliação?',
    a: 'Você pode trazer diretamente em nosso ponto de atendimento em São Paulo, agendar coleta via motoboy parceiro (capital e Grande SP) ou enviar com segurança via Correios/Sedex para todo o estado.'
  },
  {
    q: 'Quais são as formas de pagamento aceitas?',
    a: 'Aceitamos Pix (com condições especiais), cartões de crédito e débito com parcelamento em até 12x, além de boleto bancário para clientes corporativos com cadastro aprovado.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">DÚVIDAS FREQUENTES</div>
          <h2 className="section-title">
            Perguntas & <span className="gradient-text">Respostas</span>
          </h2>
          <p className="section-desc">
            Tire suas dúvidas sobre nossos procedimentos, prazos, formas de envio e garantia.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`glass-card faq-item ${isOpen ? 'active' : ''}`}
                onClick={() => toggle(index)}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.q}</span>
                  <div className={`faq-chevron ${isOpen ? 'rotated' : ''}`}>
                    <IconChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          padding: 6rem 0;
          position: relative;
        }

        .faq-container {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          padding: 0;
          cursor: pointer;
          border-color: rgba(255, 255, 255, 0.07);
        }

        .faq-item.active {
          border-color: rgba(0, 242, 254, 0.3);
          background: rgba(15, 23, 42, 0.85);
        }

        .faq-question-btn {
          width: 100%;
          background: none;
          border: none;
          padding: 1.4rem 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          gap: 1rem;
        }

        .faq-chevron {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .faq-chevron.rotated {
          transform: rotate(180deg);
          background: rgba(0, 242, 254, 0.15);
        }

        .faq-answer {
          padding: 0 1.75rem 1.5rem 1.75rem;
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.65;
          animation: fadeIn 0.3s ease;
        }

        @media (max-width: 640px) {
          .faq-question-btn {
            padding: 1.15rem 1.25rem;
            font-size: 0.98rem;
          }
          .faq-answer {
            padding: 0 1.25rem 1.25rem 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
