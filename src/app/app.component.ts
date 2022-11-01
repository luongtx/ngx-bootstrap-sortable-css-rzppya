import { Component, OnInit } from '@angular/core';
import { CfgColumn } from './cfg-column.model';
import { TriState } from './checkbox-state.enum';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  columnsConfig: CfgColumn[] = [
    { title: 'Kundennetzbezeichnung', property: 'designation', markAsLink: true, display: true },
    { title: 'Technische Teilnetze', property: 'technicalSubnets', display: true },
    { title: 'Produkte', property: 'products', display: true },
    { title: 'TDN-Vertragsnr.', property: 'tdnContractNo', display: true },
    { title: 'ZGSL-Nr.', property: 'zgslNo', display: true },
    { title: 'Gesamtpreis monatlich', property: 'monthlyTotalPrice', display: true },
    { title: 'Vertragsbeginn', property: 'contractStartDate', display: true },
    { title: 'Vertragslaufzeit', property: 'contractDuration', display: true },
  ]

  checkAll = false;

  checkCount = 0;

  checkState?: TriState;


  ngOnInit(): void {
    this.columnsConfig.forEach((config) => {
      if (config.display) {
        this.checkCount++;
      }
      this.updateCheckStatus();
    });
  }

  updateChildrenCheckbox() {
    this.columnsConfig.forEach((columnConfig) => {
      columnConfig.display = this.checkAll;
    })
  }

  updateCheckStatus() {
    if (this.checkCount == 0) {
      this.checkState = TriState.NONE;
    } else if (this.checkCount >= this.columnsConfig.length) {
      this.checkState = TriState.ALL;
    } else {
      this.checkState = TriState.PARTIAL;
    }
  }

  get TriState(): typeof TriState {
    return TriState;
  }

  onAllRowChecked(event: any) {
    this.checkAll = event.target.checked;
    this.checkCount = 0;
    this.checkState = TriState.NONE;
    if (this.checkAll) {
      this.checkCount = this.columnsConfig.length;
      this.checkState = TriState.ALL;
    }
    this.updateChildrenCheckbox();
  }


  onRowChecked(event: any) {
    let checked = event.target.checked;
    if (checked) {
      this.checkCount++;
    } else {
      this.checkCount--;
    }
    this.updateCheckStatus();
  }

}


