# E9 Gestão — Fluxo Operacional

Descreve os principais fluxos de trabalho dentro do sistema, baseados na estrutura real do código-fonte.

---

## Fluxo 1 — Ciclo de Compra

```
Solicitação de material (almoxarifado/área)
    ↓
Cotação de compra (RFQ multi-fornecedor)
    ↓
Aprovação e geração do Pedido de Compra
    ↓
Entrada de Produtos/Serviços (recebimento físico)
    ↓ (se NF-e recebida via XML)
Baixa automática no estoque + lançamento financeiro
    ↓
Geração do título no Contas a Pagar
    ↓
Aprovação por alçada (se configurada)
    ↓
Geração de remessa bancária (arquivo CNAB)
    ↓
Retorno bancário → baixa automática do título
    ↓
Lançamento contábil automático
```

**Integrações ativas neste fluxo:**
- Estoque (atualizado na entrada)
- Financeiro (título a pagar gerado automaticamente)
- Fiscal (XML da NF-e do fornecedor capturado automaticamente via DF-e)
- Contabilidade (lançamento gerado no pagamento)

---

## Fluxo 2 — Ciclo de Venda e Faturamento

```
Orçamento / Proposta comercial
    ↓
Aprovação → Pedido de Venda
    ↓
Faturamento (geração de NF-e)
    ↓
Transmissão para Sefaz (autorização NF-e)
    ↓
Baixa do estoque (automática na emissão)
    ↓
Geração do título no Contas a Receber
    ↓
Geração de boleto (se aplicável)
    ↓
Retorno bancário (pagamento do boleto) → baixa do título
    ↓
Lançamento contábil automático (receita)
```

**Para serviços:**
- NF-e substituída por NFS-e (integração ABRASF, DSF ou ISSWeb conforme município)
- Retenções de imposto calculadas automaticamente na emissão

**Para contratos recorrentes:**
- Faturamento automático por competência sem ação manual
- Geração do título e boleto automatizados

---

## Fluxo 3 — Conciliação Bancária

```
Importação do extrato bancário (arquivo OFX/CNAB)
    ↓
Sistema identifica movimentos já lançados
    ↓ (matched)
Conciliação automática (baixa dos títulos vinculados)
    ↓ (não matched)
Conciliação manual com categorização
    ↓
Lançamento contábil gerado pelo movimento conciliado
    ↓
Fluxo de caixa atualizado
```

**Bancos suportados:** Bradesco, Itaú, Banco do Brasil, Sicoob

---

## Fluxo 4 — Classificação Contábil Dinâmica

Este é um diferencial central do E9 Gestão: a contabilização começa no lançamento operacional.

```
Operação realizada (ex: emissão de NF-e, pagamento, recebimento)
    ↓
Sistema aplica regra contábil parametrizada (depara contábil)
    ↓
Lançamento contábil gerado automaticamente no mesmo momento
    ↓
DRE e Balancete atualizados em tempo real
    ↓ (fim do período)
Encerramento de período (bloqueia lançamentos retroativos)
    ↓
Demonstrativos finais (DRE, DFC, Balancete) já prontos
```

**Consequência prática:**
- Não existe "fechamento contábil mensal" demorado
- Contabilidade e financeiro nunca estão dessincronizados
- DRE pode ser consultada a qualquer momento com dados reais

---

## Fluxo 5 — Transmissão Bancária (Pagamentos)

```
Títulos a pagar aprovados e com vencimento próximo
    ↓
Seleção para remessa (por banco, data, tipo)
    ↓
Geração do arquivo de remessa CNAB
    ↓
Download e envio ao banco (portal/homebanking)
    ↓
Processamento pelo banco
    ↓
Importação do arquivo de retorno no E9 Gestão
    ↓
Baixa automática dos títulos pagos
    ↓
Lançamento contábil automático
```

---

## Fluxo 6 — Transmissão Bancária (Cobrança/Boletos)

```
Título a receber gerado (venda ou contrato)
    ↓
Geração de boleto (JRimum — dados de banco e portador)
    ↓
Geração de borderô de cobrança (remessa)
    ↓
Download e envio ao banco
    ↓
Cliente paga o boleto
    ↓
Importação do arquivo de retorno bancário
    ↓
Baixa automática do título a receber
    ↓
Lançamento contábil de receita
```

---

## Fluxo 7 — RFID e Rastreabilidade (Módulo)

```
Produto/item etiquetado com tag RFID na entrada ou produção
    ↓
Leitores RFID (fixos em docas ou portáteis PDA Android)
    ↓
Evento de leitura enviado ao E9 Gestão (integração nativa)
    ↓
Movimento registrado no estoque automaticamente
    ↓
Rastreabilidade disponível: onde o item foi, quando e por quem
    ↓ (inventário)
Contagem por leitura em massa → comparação com saldo do sistema
    ↓
Ajuste de inventário se necessário
```

---

## Fluxo 8 — Gestão Orçamentária

```
Planejamento: definição do Budget anual (por CC e projeto)
    ↓
Operação: lançamentos reais ocorrem normalmente
    ↓
Sistema compara: realizado vs. planejado em tempo real
    ↓ (revisão periódica)
Forecast: ajuste do orçamento para o restante do período
    ↓
Relatório de desvios: quais áreas/projetos estão acima ou abaixo
```

---

## Integração entre módulos (visão geral)

```
FISCAL ←──────────────────────────→ FINANCEIRO
(emissão NF-e)     (título a receber/pagar gerado automaticamente)
      ↓                                    ↓
   ESTOQUE                          CONCILIAÇÃO BANCÁRIA
(baixa automática)                  (retorno bancário)
      ↓                                    ↓
              CONTABILIDADE
        (lançamentos automáticos de todos os módulos)
              ↓
         DRE / BALANCETE / DFC
         (em tempo real, sem reclassificação)
```

Todos os módulos compartilham as mesmas entidades de cadastro (empresa, cliente, fornecedor, produto, centro de custo, projeto), eliminando retrabalho de digitação e inconsistências entre áreas.
