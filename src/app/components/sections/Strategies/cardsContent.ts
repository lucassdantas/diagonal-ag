import { StrategyCardProps } from "@/app/types/StrategyCardProps";
import { audioVisualAndContent, brandingAndVisualIdentity, grapichAndPromotionMaterials, growthAndPerformance, sitesAndDigitalExperiente } from "@/app/components/sections/Strategies/strategyCardsIcons";
import { FaCircle, FaSquare } from "react-icons/fa";
import { IoTriangleSharp } from "react-icons/io5";
export const cardsContent:StrategyCardProps[] = [
  {
    icon:growthAndPerformance,
    title:'Growth & Performance',
    description:'Tráfego pago, SEO, CRM e automação, sempre alinhados ao seu time comercial para garantir mais conversões e clientes de alto valor.',
    list:[
      {icon:IoTriangleSharp, text:'Aumento de alunos e recorrência'},
      {icon:FaSquare, text:'Relatórios claros e ROI real.'},
      {icon:FaCircle, text:'Campanhas otimizadas com foco em performance.'}
    ],
    buttonText:'Quero crescer com performance'
  },
  {
    icon:audioVisualAndContent,
    title:'Audiovisual & Conteúdo',
    description:'Captação e edição de vídeos, motion design, vídeos institucionais e conteúdo para redes sociais.',
    list:[
      {icon:IoTriangleSharp, text:'Vídeos que transformam cliques em clientes.'},
      {icon:FaSquare, text:'Conteúdo envolvente para redes sociais.'},
      {icon:FaCircle, text:'Mais engajamento e retenção do seu público.'}
    ],
    buttonText:'Preciso de vídeos de impacto'
  },
  {
    icon:brandingAndVisualIdentity,
    title:'Branding & Identidade Visual',
    description:'Criação de logotipos, identidade visual, e auditoria de design para redes sociais.',
    list:[
      {icon:IoTriangleSharp, text:'Posicionamento sólido e diferenciado.'},
      {icon:FaSquare, text:'Reconhecimento de marca no mercado.'},
      {icon:FaCircle, text:'Conexão autêntica com o público.'}
    ],
    buttonText:'Quero fortalecer minha marca'
  },
  {
    icon:sitesAndDigitalExperiente,
    title:'Sites & Experiência Digital',
    description:'Criação de sites, landing pages e experiências digitais focadas em conversão.',
    list:[
      {icon:IoTriangleSharp, text:'Site rápido, bonito e fácil de navegar.'},
      {icon:FaSquare, text:'Mais agendamentos e matrículas.'},
      {icon:FaCircle, text:'Experiência otimizada para mobile.'}
    ],
    buttonText:'Preciso de um site que converte'
  },
  {
    icon:grapichAndPromotionMaterials,
    title:'Gráfica Própria & Materiais Promocionais',
    description:'Impressão gráfica, flyers, brindes personalizados e materiais para eventos.',
    list:[
      {icon:IoTriangleSharp, text:'Mais agilidade e controle total do processo.'},
      {icon:FaSquare, text:'Custo mais competitivo sem intermediários.'},
      {icon:FaCircle, text:'Tudo integrado às suas campanhas digitais.'}
    ],
    buttonText:'Quero materiais de qualidade'
  }
]