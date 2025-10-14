import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TransactionType, transactionTypeMap } from '../../../../shared/types';

@Component({
  selector: 'app-balance-card',
  imports: [MatCardModule],
  templateUrl: './balance-card.html',
  styleUrl: './balance-card.scss'
})
export class BalanceCard {
  type = input.required<TransactionType>();
  label = input.required<string>();
  value = input.required<number>();

  readonly transactionTypeMap = transactionTypeMap;

}
