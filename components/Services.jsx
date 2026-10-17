'use client';

import React from 'react';
import { 
  IconLaptop, 
  IconCpu, 
  IconMonitor, 
  IconServer, 
  IconLayers, 
  IconZap, 
  IconWhatsApp, 
  IconArrowRight 
} from './Icons';

const services = [
  {
    id: 'notebooks',
    title: 'Notebooks & MacBooks',
    icon: IconLaptop,
    description: 'Diagnóstico e reparo completo para notebooks Dell, Lenovo, HP, Acer, Asus e linha Apple MacBook. Troca de telas, baterias, conectores e recuperação estrutural.',
    features: ['Substituição de Telas e Teclados', 'Troca de Baterias Originais', 'Reparo de Dobradiças e Carcaças', 'Limpeza Térmica com Metal Líquido/Pasta Premium'],
    whatsappQuery: 'Gostaria de um orçamento para reparo de Notebook/MacBook.'
  },
  {
    id: 'microsoldagem',
    title: 'Microsoldagem & Placas Eletrônicas',
    icon: IconCpu,
    description: 'Laboratório especializado em conserto de placas-mãe de notebooks, PCs e placas de vídeo (GPU). Solução para aparelhos em curto que não ligam ou sem vídeo.',
    features: ['Diagnóstico de Curto em Linhas Principais', 'Ressoldagem e Reballing BGA', 'Troca de CIs, MOSFETs, PWM e Super I/O', 'Gravação e Reprogramação de BIOS'],
    whatsappQuery: 'Gostaria de um orçamento para reparo de placa-mãe/microsoldagem.'
  },
  {
    id: 'gamer',
    title: 'Desktops & PCs Gamer de Alta Performance',
    icon: IconMonitor,
    description: 'Montagem, consultoria, manutenção preventiva e upgrade para PCs de alta produtividade e máquinas Gamer. Foco em estabilidade, ruído mínimo e refrigeração.',
    features: ['Montagem e Cable Management Impecável', 'Upgrades Estratégicos de SSD NVMe e RAM', 'Instalação de Water Coolers e Air Flow', 'Otimização de Sistema Operacional e Drivers'],
    whatsappQuery: 'Preciso de manutenção ou upgrade para meu Desktop / PC Gamer.'
  },
  {
    id: 'corporativo',
    title: 'TI Corporativa, Redes & Servidores',
    icon: IconServer,
    description: 'Soluções completas de TI para pequenas e médias empresas. Contratos de manutenção preventiva e corretiva com SLA ágil e atendimento presencial ou remoto.',
    features: ['Contratos de Manutenção Mensal (PJ)', 'Configuração de Servidores & Backup Nuvem', 'Roteadores Corporativos, Mikrotik & VPNs', 'Cabeamento Estruturado e Racks'],
    whatsappQuery: 'Tenho uma empresa e gostaria de suporte de TI corporativo.'
  },
  {
    id: 'dados',
    title: 'Recuperação de Dados & Armazenamento',
    icon: IconLayers,
    description: 'Recuperação de dados críticos em HDs com defeito mecânico ou lógico, SSDs corrompidos, sistemas RAID de servidores e mídias removíveis.',
    features: ['HDs Internos, Externos e SSDs', 'Partições Apagadas ou Formatadas', 'Falhas de Firmware e Placas Lógicas', 'Sigilo Absoluto e Termo de Confidencialidade'],
    whatsappQuery: 'Preciso recuperar arquivos importantes de um HD ou SSD.'
  },
  {
    id: 'eletronicos',
    title: 'Consoles & Eletrônicos em Geral',
    icon: IconZap,
    description: 'Manutenção de consoles de videogame (PlayStation, Xbox, Nintendo Switch), nobreaks industriais e senoidais, fontes de alta potência e periféricos de precisão.',
    features: ['Limpeza e Troca Térmica de Consoles', 'Reparo de Portas HDMI e Fontes Internas', 'Nobreaks para Servidores e Estações', 'Fontes de Bancada e Equipamentos Especiais'],
    whatsappQuery: 'Gostaria de saber sobre conserto de console/nobreak/eletrônico.'
  }
];

export default function Services() {
  const getWhatsAppLink = (query) => {
    return `https://wa.me/5511994158506?text=${encodeURIComponent('Olá, MTECH TI! ' + query)}`;
  };

  return (
    <section className="services-section" id="servicos">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">NOSSOS SERVIÇOS</div>
          <h2 className="section-title">
            Soluções Completas em <span className="gradient-text">Manutenção Tecnológica</span>
          </h2>
          <p className="section-desc">
            Equipamentos de alta tecnologia exigem instrumental calibrado e conhecimento técnico aprofundado. Veja como podemos atender você ou sua empresa:
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="glass-card service-card" id={`service-${service.id}`}>
                <div className="service-card-top">
                  <div className="service-icon-wrapper">
                    <IconComponent size={28} />
                  </div>
                  <span className="service-number">{(services.indexOf(service) + 1).toString().padStart(2, '0')}</span>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                <div className="service-features-list">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="service-feature-item">
                      <span className="feature-bullet">&bull;</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="service-card-footer">
                  <a
                    href={getWhatsAppLink(service.whatsappQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-cta-btn"
                  >
                    <IconWhatsApp size={17} />
                    <span>Orçamento no WhatsApp</span>
                    <IconArrowRight size={15} className="arrow-icon" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .services-section {
          padding: 6rem 0;
          position: relative;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        .service-card {
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .service-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.75rem;
        }

        .service-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(0, 242, 254, 0.12) 0%, rgba(59, 130, 246, 0.12) 100%);
          border: 1px solid rgba(0, 242, 254, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-icon-wrapper {
          transform: scale(1.1);
          border-color: var(--accent-cyan);
          box-shadow: 0 0 20px rgba(0, 242, 254, 0.3);
        }

        .service-number {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.12);
        }

        .service-title {
          font-size: 1.35rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .service-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .service-features-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .service-feature-item {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: #cbd5e1;
        }

        .feature-bullet {
          color: var(--accent-cyan);
          font-size: 1rem;
        }

        .service-card-footer {
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .service-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--whatsapp-green);
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .service-cta-btn:hover {
          color: #4ade80;
          transform: translateX(4px);
        }

        .arrow-icon {
          transition: transform 0.2s ease;
        }

        .service-cta-btn:hover .arrow-icon {
          transform: translateX(3px);
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 680px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .service-card {
            padding: 1.75rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
