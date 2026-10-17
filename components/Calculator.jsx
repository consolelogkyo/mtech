'use client';

import React, { useState } from 'react';
import { IconWhatsApp, IconCpu, IconLaptop, IconMonitor, IconServer, IconZap, IconCheckCircle, IconArrowRight } from './Icons';

const equipmentTypes = [
  { id: 'notebook', label: 'Notebook', icon: IconLaptop },
  { id: 'desktop', label: 'Desktop / PC Gamer', icon: IconMonitor },
  { id: 'macbook', label: 'Apple (MacBook / iMac)', icon: IconLaptop },
  { id: 'gpu', label: 'Placa de Vídeo / Placa-Mãe', icon: IconCpu },
  { id: 'servidor', label: 'Servidor / Rede / PJ', icon: IconServer },
  { id: 'console', label: 'Console / Outro Eletrônico', icon: IconZap },
];

const commonIssues = [
  'Não liga / Totalmente apagado',
  'Liga mas não dá vídeo / Tela preta',
  'Superaquecimento / Desliga sozinho / Barulho forte',
  'Lentidão extrema / Upgrade SSD e Memória RAM',
  'Tela quebrada / Dobradiça danificada / Carcaça',
  'Travamentos frequentes / Tela azul / Erro de Windows',
  'Derramamento de líquido / Oxidação',
  'Manutenção preventiva / Limpeza profunda / Troca de pasta'
];

export default function Calculator() {
  const [selectedDevice, setSelectedDevice] = useState('notebook');
  const [selectedIssue, setSelectedIssue] = useState('Não liga / Totalmente apagado');
  const [extraDetails, setExtraDetails] = useState('');

  const buildWhatsAppUrl = () => {
    const deviceObj = equipmentTypes.find(d => d.id === selectedDevice);
    const deviceName = deviceObj ? deviceObj.label : 'Equipamento';
    
    let text = `Olá, equipe MTECH TI! Gostaria de uma estimativa de orçamento para meu equipamento:\n\n`;
    text += `*Equipamento:* ${deviceName}\n`;
    text += `*Problema/Sintoma:* ${selectedIssue}\n`;
    if (extraDetails.trim()) {
      text += `*Detalhes adicionais:* ${extraDetails.trim()}\n`;
    }
    text += `\nPoderiam me informar sobre prazos e como enviar para avaliação?`;

    return `https://wa.me/5511994158506?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="calculator-section" id="orcamento">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">SIMULADOR INTERATIVO</div>
          <h2 className="section-title">
            Descubra o Diagnóstico e <span className="gradient-text">Peça seu Orçamento</span>
          </h2>
          <p className="section-desc">
            Selecione seu aparelho e o sintoma principal. Criamos uma mensagem personalizada para você enviar direto aos nossos técnicos no WhatsApp.
          </p>
        </div>

        <div className="glass-card calculator-card">
          {/* Step 1: Device Selection */}
          <div className="calc-step">
            <div className="step-badge">
              <span className="step-num">1</span>
              <span className="step-title">Qual é o seu equipamento?</span>
            </div>

            <div className="devices-grid">
              {equipmentTypes.map((device) => {
                const Icon = device.icon;
                const isSelected = selectedDevice === device.id;
                return (
                  <button
                    key={device.id}
                    type="button"
                    className={`device-btn ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedDevice(device.id)}
                  >
                    <Icon size={24} className="device-icon" />
                    <span>{device.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Issue Selection */}
          <div className="calc-step">
            <div className="step-badge">
              <span className="step-num">2</span>
              <span className="step-title">Qual é o sintoma ou defeito principal?</span>
            </div>

            <div className="issues-list">
              {commonIssues.map((issue, idx) => {
                const isSelected = selectedIssue === issue;
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`issue-btn ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedIssue(issue)}
                  >
                    <span className={`issue-radio ${isSelected ? 'checked' : ''}`}></span>
                    <span className="issue-text">{issue}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Optional Details */}
          <div className="calc-step">
            <div className="step-badge">
              <span className="step-num">3</span>
              <span className="step-title">Detalhe o modelo ou histórico (Opcional):</span>
            </div>

            <textarea
              className="details-textarea"
              placeholder="Exemplo: Notebook Dell Inspiron 15, comprei há 2 anos, parou de ligar após uma tempestade..."
              rows={3}
              value={extraDetails}
              onChange={(e) => setExtraDetails(e.target.value)}
            />
          </div>

          {/* Action Row */}
          <div className="calc-action-row">
            <div className="calc-reassurance">
              <IconCheckCircle size={18} className="text-whatsapp" />
              <span>Diagnóstico inicial sem compromisso &bull; Resposta via WhatsApp</span>
            </div>

            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp calc-submit-btn"
              id="calc-submit-whatsapp"
            >
              <IconWhatsApp size={20} />
              <span>Enviar Diagnóstico para o WhatsApp</span>
              <IconArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .calculator-section {
          padding: 6rem 0;
          background: rgba(13, 18, 31, 0.4);
          position: relative;
        }

        .calculator-card {
          padding: 3rem 2.5rem;
          max-width: 900px;
          margin: 0 auto;
          border-color: rgba(0, 242, 254, 0.2);
        }

        .calc-step {
          margin-bottom: 2.5rem;
        }

        .step-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .step-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--grad-cyan-blue);
          color: #07090e;
          font-weight: 800;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
        }

        .devices-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.85rem;
        }

        .device-btn {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 1.15rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.65rem;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .device-btn:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.15);
          color: #ffffff;
        }

        .device-btn.selected {
          background: rgba(0, 242, 254, 0.1);
          border-color: var(--accent-cyan);
          color: #ffffff;
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.2);
        }

        .device-btn.selected .device-icon {
          color: var(--accent-cyan);
        }

        .issues-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .issue-btn {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-muted);
          cursor: pointer;
          text-align: left;
          font-family: var(--font-sans);
          font-size: 0.88rem;
          transition: all 0.2s ease;
        }

        .issue-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
        }

        .issue-btn.selected {
          background: rgba(0, 242, 254, 0.08);
          border-color: rgba(0, 242, 254, 0.4);
          color: #ffffff;
        }

        .issue-radio {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.2);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .issue-radio.checked {
          border-color: var(--accent-cyan);
          background: var(--accent-cyan);
        }

        .details-textarea {
          width: 100%;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1rem;
          color: #ffffff;
          font-family: var(--font-sans);
          font-size: 0.92rem;
          resize: vertical;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .details-textarea:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.2);
        }

        .calc-action-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .calc-reassurance {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .text-whatsapp {
          color: var(--whatsapp-green);
        }

        .calc-submit-btn {
          padding: 0.95rem 2rem;
          font-size: 1rem;
        }

        @media (max-width: 820px) {
          .devices-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .issues-list {
            grid-template-columns: 1fr;
          }
          .calculator-card {
            padding: 2rem 1.5rem;
          }
          .calc-action-row {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
    </section>
  );
}
