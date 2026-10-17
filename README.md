# MTECH TI - Site Institucional & Venda de Serviços de Manutenção

Site institucional moderno, responsivo e de alta conversão desenvolvido para a **MTECH TI** (Especialistas em manutenção de computadores, notebooks, microsoldagem de placas, servidores e eletrônicos).

Desenvolvido em **Next.js (App Router)** e **React**, pronto para deploy direto na **Vercel** sem necessidade de configurações adicionais.

---

## 🚀 Como Rodar no seu Terminal Local

Como solicitado, nenhuma dependência foi instalada automaticamente para evitar conflitos no seu terminal. O projeto está limpo e pronto para você instalar quando quiser:

### 1. Acesse a pasta do projeto:
```bash
cd mtech-ti
```
*(Criamos um atalho direto na sua pasta de usuário `~/mtech-ti`, apontando para `/Users/kyo/.gemini/antigravity-ide/scratch/mtech-ti`)*

### 2. Instale as dependências:
```bash
npm install
```
*(Como usamos apenas Next.js e React com CSS Puro e SVGs inline, a instalação leva apenas alguns segundos!)*

### 3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

Abra no seu navegador: [http://localhost:3000](http://localhost:3000)

---

## ⚡ Como Fazer o Deploy na Vercel

O projeto foi configurado com os padrões nativos do Next.js:

1. Suba o código para o seu repositório no **GitHub** ou **GitLab**:
   ```bash
   git init
   git add .
   git commit -m "feat: site institucional MTECH TI"
   # Adicione seu repositório remoto e faça push
   ```
2. Acesse [vercel.com](https://vercel.com) e clique em **Add New Project**.
3. Importe seu repositório.
4. A Vercel detectará automaticamente o framework **Next.js**. Não precisa alterar nada no build.
5. Clique em **Deploy**! Em menos de 1 minuto seu site estará online com certificado SSL gratuito.

---

## 📱 Informações e Contato Integrados

- **WhatsApp & Telefone**: `(11) 99415-8506`
- **Link Direto**: Integrado em botões principais, cabeçalho, rodapé e botão flutuante.
- **Simulador Interativo**: O cliente seleciona o aparelho (Notebook, Desktop, Apple, etc.) e o defeito, gerando uma mensagem pré-formatada pronta para envio no WhatsApp da MTECH TI.

---

## 📂 Estrutura de Arquivos

```
mtech-ti/
├── app/
│   ├── globals.css          # Design system completo (Dark tech, glassmorphism, responsivo)
│   ├── layout.jsx           # Metadados de SEO, fontes Google (Outfit + Inter) e ícones
│   └── page.jsx             # Estrutura principal da Landing Page
├── components/
│   ├── Navbar.jsx           # Barra de navegação fixa com menu mobile
│   ├── Hero.jsx             # Seção de abertura com proposta de valor e card do laboratório
│   ├── BrandTicker.jsx      # Marcas atendidas (Dell, Apple, HP, Intel, AMD, etc.)
│   ├── Services.jsx         # Grade de 6 serviços detalhados com links diretos
│   ├── Calculator.jsx       # Simulador interativo de orçamento via WhatsApp
│   ├── WhyUs.jsx            # Diferenciais competitivos da MTECH TI
│   ├── Process.jsx          # Como funciona o atendimento em 4 passos
│   ├── Testimonials.jsx     # Depoimentos e avaliações de clientes reais
│   ├── FAQ.jsx              # Perguntas e respostas frequentes (Accordion)
│   ├── ContactSection.jsx   # Seção final de contato, horário e região
│   ├── Footer.jsx           # Rodapé institucional
│   ├── WhatsAppFloating.jsx # Botão flutuante do WhatsApp com badge
│   └── Icons.jsx            # Conjunto de ícones SVG leves e independentes
├── public/
│   ├── icon.svg             # Ícone e logo vetorizado da marca
│   ├── robots.txt           # Diretrizes para indexadores
│   └── sitemap.xml          # Mapa do site para SEO
├── next.config.js           # Configurações do Next.js
├── package.json             # Dependências limpas (Next 14 + React 18)
└── .gitignore               # Ignora node_modules, .next e builds
```
# mtech
