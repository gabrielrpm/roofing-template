# ROOFING TEMPLATE — Customização por cliente (Claude Code)

Template premium de site para empresas de roofing nos EUA. Ao customizar para um cliente, o material real dele já está extraído neste projeto. Siga estas regras.

## Como customizar (quando o usuário pedir para customizar o site)
Leia TUDO sozinho do material extraído — NÃO peça informação ao usuário:
- _source/site-content.md → nome do negócio, serviços, taglines, diferenciais, toda a copy real
- _source/client-info.json → telefone, email, endereço, redes sociais
- _source/images-manifest.json + public/images/ → imagens reais e o logo
Extraia daí: nome do cliente, serviços, contato, área de atendimento, diferencial principal e a paleta de cores (a partir do logo). Mantenha o design e a qualidade do template; troque apenas conteúdo, cores e imagens pelos reais.

## REGRA Nº1 — CONTEÚDO 100% REAL
Todo conteúdo factual vem do _source/. NUNCA mantenha texto ou seções do template só para preencher, e NUNCA invente fatos (números, anos de experiência, prêmios, certificações, cidades atendidas, serviços que o cliente não tem).
- Sem dado real para uma seção → remova a seção OU use só o real (ex: "Serving All of [estado]" em vez de cidades inventadas).
- ÚNICA exceção: reviews/testimonials podem ficar como placeholder, para credibilidade.

## Marca e imagens
- Logo real (public/images/) no header E no footer. O footer SEMPRE usa o MESMO logo do header.
- LOGO: usar next/image com width e height EXPLÍCITOS. NUNCA usar fill no logo (fill sem altura no parent faz o logo virar um quadrado branco). Ex: <Image src="/images/LOGO" width={160} height={48} alt="..." />
- Paleta de cores tirada do logo → CSS variables --brand / --brand-dark / --brand-light. Realce usa --brand.
- Imagens reais nas seções e galeria (via manifest), nunca placeholder onde houver imagem real.
- Header, footer e contato com os dados reais do client-info.json.
- Conteúdo em inglês.

## Regras técnicas (NÃO quebrar)
- NUNCA adicione reset global "* { margin:0; padding:0 }" no globals.css. Isso quebra TODO o espaçamento do Tailwind v4 (regra sem layer sobrescreve as utilities). Mantenha o globals.css limpo: só @import, :root com as variáveis e estilos de body/html.
- Sempre espaço entre classes do Tailwind (ex: "fill-yellow-400 text-yellow-400", nunca colado).
- lucide-react NÃO tem ícones de redes sociais — use Share2 ou texto/link.
- next/image: prop sizes em imagens com fill; width/height em logos.
- overflow-x-hidden no container raiz.
- Stack: Next.js 16 + Tailwind v4 + TypeScript.
- Ao terminar, rode find app -name "page.tsx" e confirme que compila sem erro.

## Estrutura premium (manter)
header sticky → hero → trust bar → services → why us → gallery → testimonials → process → financing/insurance → service area → quote form → footer. Barra fixa mobile com Call + Quote. Remova seções sem conteúdo real (exceto reviews).
