# E9 Gestão — Módulos

## 1. Cadastros (Master Data)

Dados centrais compartilhados por todos os módulos.

### Cadastro de Empresa
- Perfil completo: CNPJ, IE, IM, razão social, nome fantasia
- Endereço, contato, atividades e serviços
- Parâmetros por empresa (fiscal, contábil, financeiro)

### Clientes e Fornecedores
- Cadastro unificado de pessoa (CPF/CNPJ)
- Endereços múltiplos: fatura, cobrança, entrega
- Histórico de compras/vendas, análise de crédito
- Relacionamento produto × fornecedor

### Produtos e Serviços
- Código, descrição, unidade, grupo, NCM
- Valor de venda, controle de estoque
- Configuração para NF-e (produto) e NFS-e (serviço)

### Estrutura Financeira
- Centros de custo
- Projetos (para alocação de receitas e despesas)
- Contas bancárias (corrente, poupança, cartão, Pix)

### Usuários e Permissões
- Usuários por empresa/filial
- Tipos de usuário e perfis de acesso
- Permissões granulares por área, setor e função
- Auditoria operacional

---

## 2. Financeiro

Maior módulo do sistema (342 arquivos Java, 67 telas).

### Contas a Receber
- Títulos a receber com vencimento, valor, portador
- Contratos de cobrança recorrente (geral e específico por vertical)
- Faturamento e geração de boletos (integração JRimum)
- Negociação e baixa de títulos
- Gestão de crédito por cliente
- Importação de pagamentos
- Notificação de cobrança via WhatsApp

### Contas a Pagar
- Títulos a pagar com aprovação por alçadas
- Cheques, cartão de crédito
- Retenção de impostos (IR, PIS, COFINS, CSLL, ISS, INSS)
- Adiantamentos e reembolsos a funcionários
- Folha de pagamento (integração com módulo contábil)
- Capital/aportes

### Movimentação Bancária
- Lançamentos de entrada e saída por conta
- Conciliação bancária (importação de extrato via arquivo)
- Fluxo de caixa em tempo real
- Integração contábil automática dos movimentos

### Transmissão de Arquivos Bancários
- Geração de remessas de pagamento (CNAB)
- Borderô de cobrança (remessa de boletos)
- Processamento de arquivos de retorno: Bradesco, Itaú, BB, Sicoob
- Baixa automática de títulos via retorno bancário

### Gestão Orçamentária
- Budget anual por centro de custo e projeto
- Forecast (revisão de orçamento)
- Análise realizado vs. planejado
- Relatórios gerenciais por período

### Relatórios Financeiros
- Boletim de caixa
- Relatório de faturamento
- Pagamento por projeto
- Relatório por centro de custo
- Conciliação pagamento × recebimento

---

## 3. Fiscal e Emissão de Documentos

### NF-e (Nota Fiscal Eletrônica — Produto)
- Emissão individual e em lote
- Tipos de operação configuráveis
- Cancelamento, inutilização, carta de correção
- Baixa automática de estoque na emissão

### NFC-e (Nota Fiscal de Consumidor Eletrônica)
- Emissão simplificada para venda direta ao consumidor

### NFS-e (Nota Fiscal de Serviço Eletrônica)
- Múltiplos integradores municipais:
  - ABRASF (padrão nacional)
  - DSF
  - ISSWeb
- Configuração por município

### CT-e (Conhecimento de Transporte Eletrônico)
- Emissão e controle de transporte

### MDF-e (Manifesto Eletrônico de Documentos Fiscais)
- Controle de carga em trânsito

### SPED Fiscal
- Geração de arquivo SPED integrado aos documentos emitidos

### Captura de Documentos
- Captura automática de DF-e (documentos emitidos contra o CNPJ da empresa)
- Baixa automática de NF-e e CT-e no estoque/financeiro

### Certificado Digital
- Gerenciamento de certificado A1 por empresa

---

## 4. Contabilidade

A contabilidade do E9 Gestão é integrada à operação — não é um módulo separado pós-fato.

### Plano de Contas
- Configuração e atribuição por empresa
- Parâmetros contábeis por empresa
- Históricos contábeis padronizados

### Lançamentos Contábeis
- Gerados automaticamente pelos movimentos financeiros e fiscais
- Lançamentos manuais com histórico
- Consulta e edição com rastreabilidade

### Livro Razão
- Consulta por conta contábil e período

### Balancete
- Balancete geral por período
- Balancete por centro de custo

### Demonstrativos
- DRE (Demonstração do Resultado do Exercício) em tempo real
- DRE por projeto
- DFC (Demonstração do Fluxo de Caixa)
- Templates configuráveis de demonstrativos

### Encerramento de Período
- Controle de competência
- Encerramento por período com bloqueio de lançamentos retroativos

### Folha de Pagamento (integração contábil)
- Lançamentos de folha integrados ao financeiro e contábil

---

## 5. Compras, Estoque e Almoxarifado

### Compras
- Solicitação de compra (requisição de materiais)
- Cotação de compra (RFQ multi-fornecedor)
- Pedido de compra com itens, quantidades e prazos
- Entrada de produtos e serviços vinculada ao pedido

### Controle de Estoque
- Saldo por produto e depósito
- Movimentações (entrada, saída, transferência)
- Inventário
- Relatórios gerenciais de estoque

### Almoxarifado
- Controle de almoxarifado (materiais de consumo interno)
- Requisição de materiais por área/setor
- Histórico de movimentações

### Baixa Automática
- Baixa automática de estoque via XML de NF-e recebida
- Baixa automática via CT-e

---

## 6. Vendas e Faturamento

### Vendas
- Orçamento / proposta comercial
- Pedido de venda
- Faturamento com geração de NF-e integrada

### Contratos de Serviço
- Contratos recorrentes com faturamento automático
- Gestão de vigência, valor e índice de reajuste

### Campanhas
- Gestão de campanhas comerciais

---

## 7. Gestão Multiempresa

- Múltiplos CNPJs na mesma instância
- Configuração individual por empresa (fiscal, contábil, financeiro)
- Troca rápida entre empresas/filiais
- Visão consolidada de grupo (financeiro, DRE)
- Usuários com acesso restrito por empresa/filial

---

## 8. Módulos Verticais e Customizações

O E9 Gestão suporta módulos específicos por segmento integrados ao núcleo:

### Exemplo: Módulo Equino
- Cadastro de equinos e genealogia
- Vendas de embriões
- Contratos específicos de compra/venda
- Relatórios especializados

### Exemplo: Módulo RFID
- Identificação automática por radiofrequência
- Integração com coletores Android (PDA)
- Controle de inventário por leitura RFID
- Rastreabilidade de produção e logística

### Customizações comuns
- Módulos de OS (Ordem de Serviço) específicos
- Integrações com e-commerce e marketplaces
- Dashboards executivos personalizados
- Workflows de aprovação por alçada
