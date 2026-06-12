# Template base — ROOFING

Site para empresas de telhado (roofing contractors) nos EUA. Premium, focado em conversão (orçamento/ligação).

## Material do cliente
- _source/site-content.md — textos (blocos ---)
- _source/images-manifest.json — imagens por página
- _source/client-info.json — email, telefone, endereço, redes
- public/images/ — imagens reais

## Regras
- DESCARTE conteúdo de exemplo do template
- Use TODAS as imagens reais; galeria com fotos de trabalhos, nunca placeholder
- Cores da marca nas CSS variables (--brand, --brand-dark, --brand-light), tiradas do logo
- Contato real do client-info.json no header, footer e formulário de orçamento
- Todas as páginas do original como rotas; responsivo; sem overflow horizontal
- Ao final: find app -name "page.tsx"

## Deploy
./ship.sh nome-cliente
