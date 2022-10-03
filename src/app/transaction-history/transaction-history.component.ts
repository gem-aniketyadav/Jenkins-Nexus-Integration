import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  
  transactions = [{
    id: 1,
    isRequested:false,
    date:"7 Oct 2020",
    time:"10:24 AM",
    amount:"3000",
    type:"pay",
    trasacId:"A342344366563464536456",
  },
  {
    id: 2,
    isRequested:true,
    date:"10 Oct 2020",
    time:"10:24 AM",
    amount:"250",
    type:"pay",
    trasacId:"A342344366563464536456",
  },
  {
    id: 3,
    isRequested:false,
    date:"19 Oct 2020",
    time:"10:24 AM",
    amount:"250",
    type:"received",
    trasacId:"A342344366563464536456",
  },
  {
    id: 4,
    isRequested:true,
    date:"19 Oct 2020",
    time:"10:24 AM",
    amount:"250",
    type:"received",
    trasacId:"A342344366563464536456",
  }];

  

  

  constructor() { }

  ngOnInit(): void {
  }
  
}
