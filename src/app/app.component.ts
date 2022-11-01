import { Component } from '@angular/core';
import { CfgColumn } from './cfg-column.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  columnsConfig: CfgColumn[] = [
    { title: 'Kundennetzbezeichnung', property: 'designation', markAsLink: true },
    { title: 'Technische Teilnetze', property: 'technicalSubnets' },
    { title: 'Produkte', property: 'products' },
    { title: 'TDN-Vertragsnr.', property: 'tdnContractNo' },
    { title: 'ZGSL-Nr.', property: 'zgslNo' },
    { title: 'Gesamtpreis monatlich', property: 'monthlyTotalPrice' },
    { title: 'Vertragsbeginn', property: 'contractStartDate' },
    { title: 'Vertragslaufzeit', property: 'contractDuration' },
  ]

}


