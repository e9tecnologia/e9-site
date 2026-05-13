# E9 Gestão — Funcionalidades

Lista de funcionalidades confirmadas no código-fonte do sistema (C:\Projetos\e9\imperio).

## Financeiro

| Funcionalidade | Descrição |
|---|---|
| Contas a receber | Gestão de títulos com vencimento, portador, baixa manual e automática |
| Contas a pagar | Gestão de obrigações com controle de alçadas e retenções |
| Fluxo de caixa | Visão em tempo real de entradas e saídas por conta/período |
| Conciliação bancária | Importação de extrato e conciliação com movimentos do ERP |
| Transmissão de remessas | Geração de arquivo CNAB para envio ao banco |
| Retorno bancário | Processamento automático de arquivos de retorno (Bradesco, Itaú, BB, Sicoob) |
| Boleto bancário | Geração e registro de boletos integrado à cobrança |
| Contratos recorrentes | Faturamento automático por contrato com vigência e reajuste |
| Budget | Orçamento anual por centro de custo e projeto |
| Forecast | Revisão periódica do orçamento com comparativo realizado vs. planejado |
| Centro de custo | Rateio e controle de despesas e receitas por centro de custo |
| Projetos | Alocação financeira por projeto com DRE própria |
| Adiantamentos | Controle de adiantamentos a funcionários |
| Reembolsos | Gestão de reembolso de despesas por funcionário |
| Retenções de imposto | Cálculo e controle de IR, PIS, COFINS, CSLL, ISS, INSS na saída |
| Cartão de crédito | Importação e gestão de faturas de cartão |
| Cheques | Controle de cheques emitidos e recebidos |
| WhatsApp cobrança | Envio de notificações de cobrança via WhatsApp integrado ao ERP |

## Fiscal

| Funcionalidade | Descrição |
|---|---|
| Emissão NF-e | Nota Fiscal Eletrônica de produto — individual e em lote |
| Emissão NFC-e | Nota Fiscal de Consumidor |
| Emissão NFS-e | Nota Fiscal de Serviço — integração ABRASF, DSF, ISSWeb |
| Emissão CT-e | Conhecimento de Transporte Eletrônico |
| Emissão MDF-e | Manifesto Eletrônico de Documentos Fiscais |
| SPED Fiscal | Geração de arquivo SPED integrado aos documentos do período |
| Captura DF-e | Download automático de documentos emitidos contra o CNPJ |
| Baixa automática NF-e | Entrada automática no estoque via XML de NF-e recebida |
| Baixa automática CT-e | Entrada automática via CT-e |
| Certificado digital A1 | Gerenciamento de certificado por empresa |
| Tipos de operação | Configuração de CFOP, CST, impostos por tipo de operação |

## Contabilidade

| Funcionalidade | Descrição |
|---|---|
| Classificação contábil automática | Lançamentos gerados automaticamente pelos movimentos financeiros e fiscais |
| Plano de contas | Estrutura contábil configurável por empresa |
| Livro razão | Consulta de movimentações por conta contábil |
| Balancete | Balancete geral e por centro de custo |
| DRE em tempo real | Demonstração do Resultado atualizada a cada lançamento |
| DRE por projeto | DRE segregada por projeto/contrato |
| DFC | Demonstração do Fluxo de Caixa |
| Encerramento de período | Bloqueio de lançamentos retroativos com controle de competência |
| Lançamentos manuais | Entrada manual com histórico contábil e rastreabilidade |
| Parâmetros contábeis | Regras de classificação configuráveis por empresa |

## Estoque e Compras

| Funcionalidade | Descrição |
|---|---|
| Cotação de compra | RFQ multi-fornecedor com comparativo |
| Pedido de compra | Controle de pedidos com status, itens e prazos |
| Entrada de produtos | Recebimento com vínculo ao pedido e atualização de estoque |
| Controle de estoque | Saldo por produto, depósito e movimentações |
| Inventário | Contagem e ajuste de estoque |
| Almoxarifado | Controle de materiais de consumo interno com requisição por área |
| Solicitação de materiais | Fluxo de requisição interno com aprovação |

## Vendas

| Funcionalidade | Descrição |
|---|---|
| Orçamento/proposta | Elaboração e envio de proposta comercial |
| Pedido de venda | Controle de pedidos com itens, quantidades e prazo |
| Faturamento | Emissão de NF-e vinculada ao pedido de venda |
| Contratos de serviço | Contratos recorrentes com faturamento automático |
| Campanhas | Criação e controle de campanhas comerciais |

## Gestão e Governança

| Funcionalidade | Descrição |
|---|---|
| Multi-empresa | Múltiplos CNPJs em uma instância com controle individual e consolidado |
| Gestão de usuários | Usuários por empresa/filial com perfis e permissões granulares |
| Auditoria | Rastreabilidade de operações por usuário |
| Notificações | E-mail, notificações internas configuráveis |

## Relatórios e Dashboards

| Relatório | Módulo |
|---|---|
| Fluxo de caixa (boletim de caixa) | Financeiro |
| Faturamento por período | Financeiro/Vendas |
| Pagamento por projeto | Financeiro |
| Relatório por centro de custo | Financeiro/Contábil |
| DRE e DRE por projeto | Contabilidade |
| Balancete (geral e por CC) | Contabilidade |
| Relatórios de estoque | Compras/Estoque |
| Relatório de compras | Compras |
| Budget vs. realizado | Gestão Orçamentária |
| Dashboard executivo | Início (home) |

## Integrações nativas

| Integração | Descrição |
|---|---|
| Sefaz (NF-e, CT-e, MDF-e) | Autorização e consulta de status |
| Prefeituras (NFS-e) | ABRASF, DSF, ISSWeb |
| Bancos (arquivo) | Bradesco, Itaú, BB, Sicoob — remessa e retorno CNAB |
| WhatsApp | Notificações de cobrança |
| E-commerce | Integração de pedidos (módulo customizável) |
| Marketplaces | Integração de pedidos (módulo customizável) |
