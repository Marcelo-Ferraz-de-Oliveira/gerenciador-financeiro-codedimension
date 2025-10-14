export type TransactionType = 'income' | 'outcome' | 'balance';

export const transactionTypeMap: Record<TransactionType, string> = {
    income: 'Receita',
    outcome: 'Despesa',
    balance: 'Saldo'
  };


