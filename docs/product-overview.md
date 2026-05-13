# E9 Gestão — Product Overview

## O que é

O **E9 Gestão** é uma plataforma ERP desenvolvida e mantida pela E9 Tecnologia desde 2003. É um sistema de gestão empresarial com código 100% próprio, construído para empresas que operam com processos complexos, alto volume transacional e necessidade de integração entre áreas financeira, fiscal, contábil e operacional.

O sistema roda na web (aplicação Java EE com GlassFish), acesso via browser, e é implantado on-premise ou em cloud privada no servidor do cliente.

## Posicionamento

Não é um ERP genérico de prateleira. O E9 Gestão é altamente parametrizável e suporta desenvolvimento de módulos específicos que se integram nativamente ao núcleo — sem sistemas paralelos ou integrações externas frágeis.

## Público-alvo

- Empresas de médio porte com operações complexas
- Grupos empresariais com múltiplos CNPJs
- Empresas com demandas fiscais e contábeis avançadas
- Segmentos: serviços recorrentes, indústria, holdings, agronegócio, educação, produção de eventos
- Empresas que precisam de personalização real (não workarounds)

## Stack tecnológica do produto

| Camada | Tecnologia |
|--------|-----------|
| Backend | Java EE (JSF 2.x, CDI, JPA) |
| Frontend | PrimeFaces 12.0, XHTML Facelets, SCSS |
| Servidor | GlassFish v4 EE7 |
| Banco de dados | SQL Server 2012+ |
| Relatórios | JasperReports 5.1 |
| PDF | iText 2.1.7 |
| Planilhas | Apache POI 4.1.1 |
| Boletos | JRimum Bopepo 0.2.3 |
| Build | Apache Ant |

## Diferenciais técnicos

- **Classificação contábil dinâmica**: a contabilização inicia no lançamento operacional e se propaga em tempo real — DRE e Balancete sempre atualizados sem reclassificações manuais.
- **Integração fiscal nativa**: NF-e, NFS-e, NFC-e, CT-e, MDF-e e SPED integrados ao fluxo financeiro sem middleware externo.
- **Multi-empresa**: múltiplos CNPJs em uma única instância, com visão individual e consolidada.
- **Integração bancária por transmissão de arquivos**: envio de remessas de pagamento e processamento de retornos (Bradesco, Itaú, BB, Sicoob) diretamente no ERP.
- **Módulos verticais**: suporte a módulos específicos por segmento integrados ao núcleo (ex: módulo Equino, módulo Elicon, módulo RFID).

## Implantação

- Configuração por empresa/filial dentro da mesma instância
- Hierarquia de usuários com permissões por área e setor
- Certificado digital A1 configurado por empresa
- Parâmetros fiscais, contábeis e financeiros configuráveis por empresa
