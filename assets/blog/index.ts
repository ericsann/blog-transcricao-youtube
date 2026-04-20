import { BlogPost } from "./types";

// Import individual blog posts
import { blogPost as acaoDeImissaoNaPosse } from "./posts/acao-de-imissao-na-posse";
import { blogPost as arrematacaoADistancia } from "./posts/arrematacao-a-distancia";
import { blogPost as comoAnalisarUmImovelDeLeilao } from "./posts/como-analisar-um-imovel-de-leilao";
import { blogPost as comoDescobrirOsDadosDoOcupante } from "./posts/como-descobrir-os-dados-do-ocupante";
import { blogPost as comoDesocuparImovelLeilao } from "./posts/como-desocupar-imovel-leilao";
import { blogPost as comoFinanciarImovelDaCaixa } from "./posts/como-financiar-imovel-da-caixa";
import { blogPost as custosDocumentacaoLeilao } from "./posts/custos-documentacao-leilao";
import { blogPost as desvendandoMitosLeiloes } from "./posts/desvendando-mitos-leiloes";
import { blogPost as empresaParaDesocuparImovel } from "./posts/empresa-para-desocupar-imovel";
import { blogPost as envioNotificacaoExtrajudicial } from "./posts/envio-notificacao-extrajudicial";
import { blogPost as fgtsEmImovelDeLeilao } from "./posts/fgts-em-imovel-de-leilao";
import { blogPost as imissaoNaPosseDeImovelOcupado } from "./posts/imissao-na-posse-de-imovel-ocupado";
import { blogPost as imissaoNaPosseGuiaCompleto } from "./posts/imissao-na-posse-guia-completo";
import { blogPost as imovelDeLeilaoOcupadoGuiaCompleto } from "./posts/imovel-de-leilao-ocupado-guia-completo";
import { blogPost as leilaoDaCaixaGuiaCompleto } from "./posts/leilao-da-caixa-guia-completo";
import { blogPost as leilaoJudicialVsExtrajudicialCaixa } from "./posts/leilao-judicial-vs-extrajudicial-caixa";
import { blogPost as limiarDeImissaoNaPosse } from "./posts/liminar-de-imissao-na-posse";
import { blogPost as mandadoDeImissaoNaPosse } from "./posts/mandado-de-imissao-na-posse";
import { blogPost as oQueFazerAoEntrarImovelArrematado } from "./posts/o-que-fazer-ao-entrar-imovel-arrematado";
import { blogPost as porQueLeiloesCaixa } from "./posts/por-que-leiloes-caixa";
import { blogPost as quantoCustaAcaoDeImissaoNaPosse } from "./posts/quanto-custa-acao-de-imissao-na-posse";
import { blogPost as quantoCustaDesocuparImovel } from "./posts/quanto-custa-desocupar-imovel";
import { blogPost as quantoDinheiroInvestirLeiloes } from "./posts/quanto-dinheiro-investir-leiloes";
import { blogPost as quantoTempoDemoraParaDesocupar } from "./posts/quanto-tempo-demora-para-desocupar";
import { blogPost as tecnicasDeNegociacaoParaDesocupacao } from "./posts/tecnicas-de-negociacao-para-desocupacao";
import { blogPost as tradicaoDaPosseEmImovelDeLeilao } from "./posts/tradicao-da-posse-em-imovel-de-leilao";
import { blogPost as vendaDiretaCaixaValeAPena } from "./posts/venda-direta-caixa-vale-a-pena";
import { blogPost as vendaDiretaOnlineVsVendaDireta } from "./posts/venda-direta-online-vs-venda-direta";
import { blogPost as verdadeSobreFotosLeiloes } from "./posts/verdade-sobre-fotos-leiloes";

/**
 * All blog posts (for individual post pages and slug lookups)
 * This array is used by getAllSlugs() and getPostBySlug()
 */
const allBlogPosts: BlogPost[] = [
  limiarDeImissaoNaPosse,
  quantoCustaAcaoDeImissaoNaPosse,
  imissaoNaPosseDeImovelOcupado,
  tradicaoDaPosseEmImovelDeLeilao,
  mandadoDeImissaoNaPosse,
  comoFinanciarImovelDaCaixa,
  fgtsEmImovelDeLeilao,
  vendaDiretaCaixaValeAPena,
  leilaoJudicialVsExtrajudicialCaixa,
  leilaoDaCaixaGuiaCompleto,
  imovelDeLeilaoOcupadoGuiaCompleto,
  imissaoNaPosseGuiaCompleto,
  comoAnalisarUmImovelDeLeilao,
  arrematacaoADistancia,
  porQueLeiloesCaixa,
  vendaDiretaOnlineVsVendaDireta,
  envioNotificacaoExtrajudicial,
  quantoDinheiroInvestirLeiloes,
  tecnicasDeNegociacaoParaDesocupacao,
  verdadeSobreFotosLeiloes,
  custosDocumentacaoLeilao,
  acaoDeImissaoNaPosse,
  comoDescobrirOsDadosDoOcupante,
  comoDesocuparImovelLeilao,
  oQueFazerAoEntrarImovelArrematado,
  quantoCustaDesocuparImovel,
  quantoTempoDemoraParaDesocupar,
  empresaParaDesocuparImovel,
  desvendandoMitosLeiloes,
];

/**
 * Featured blog posts (shown on home/blog listing page)
 * Only includes posts that have proper images
 */
export const blogPosts: BlogPost[] = [
  arrematacaoADistancia,
  porQueLeiloesCaixa,
  vendaDiretaOnlineVsVendaDireta,
  envioNotificacaoExtrajudicial,
  quantoDinheiroInvestirLeiloes,
  tecnicasDeNegociacaoParaDesocupacao,
  verdadeSobreFotosLeiloes,
  custosDocumentacaoLeilao,
  acaoDeImissaoNaPosse,
  comoDescobrirOsDadosDoOcupante,
  comoDesocuparImovelLeilao,
  oQueFazerAoEntrarImovelArrematado,
];

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find((post) => post.slug === slug);
}

/**
 * Blog post summary (without content) for list views
 */
export type BlogPostSummary = Omit<BlogPost, "content">;

/**
 * Get all blog posts as summaries (without content)
 * Used by the blog listing page to show featured posts
 */
export function getBlogPostSummary(): BlogPostSummary[] {
  return blogPosts.map((post) => {
    const { content, ...summary } = post;
    return summary;
  });
}

/**
 * Get all slugs for static generation
 */
export function getAllSlugs(): string[] {
  return allBlogPosts.map((post) => post.slug);
}

// Default export for backward compatibility
export default blogPosts;
