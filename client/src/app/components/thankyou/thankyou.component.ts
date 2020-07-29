import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.sass']
})
export class ThankyouComponent implements OnInit {
  orderRefNo: number;

  constructor(public storeService: StoreService) { }

  ngOnInit(): void {
    this.orderRefNo = this.storeService.lastOrderReferenceNumber;
  }

}
