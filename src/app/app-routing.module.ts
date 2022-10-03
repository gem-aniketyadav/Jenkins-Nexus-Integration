import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

const routes: Routes = [
  {path: '', component: TransactionHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
