import './globals.css';

export const metadata = {
  title: 'MTECH TI | Manutenção de TI, Notebooks, Placas & Eletrônicos',
  description: 'Assistência técnica especializada em TI, notebooks, microsoldagem de placas, computadores gamer, servidores e suporte corporativo em SP. Orçamento via WhatsApp: (11) 99415-8506.',
  keywords: 'manutenção de ti, conserto de notebook são paulo, microsoldagem placa mae, reparo macbook, assistencia tecnica ti sp, suporte corporativo ti, conserto placa de video, mtech ti',
  authors: [{ name: 'MTECH TI' }],
  creator: 'MTECH TI',
  publisher: 'MTECH TI',
  metadataBase: new URL('https://mtechti.com.br'),
  openGraph: {
    title: 'MTECH TI | Manutenção Especializada em TI & Eletrônicos',
    description: 'Recuperação de computadores, notebooks, placas em curto e servidores corporativos com 90 dias de garantia. Fale conosco: (11) 99415-8506.',
    url: 'https://mtechti.com.br',
    siteName: 'MTECH TI',
    locale: 'pt_BR',
    type: 'website',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="bg-glow-layer" aria-hidden="true">
          <div className="glow-orb-1"></div>
          <div className="glow-orb-2"></div>
          <div className="glow-orb-3"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
