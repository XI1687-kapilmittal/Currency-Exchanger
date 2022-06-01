import { Component, OnInit } from '@angular/core';
import { ConversionService } from 'src/app/services/conversion.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    formElement = {
        amount: '',
        from: 'EUR',
        to: 'USD',
        convertedValue: '',
        rate: ''
    };

    popularCurrency = ['USD', 'EUR', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'INR', 'NZD'];
    symbols: any = [];
    constructor(private conversion: ConversionService) {}

    ngOnInit(): void {
        //Avoid calling server while developing as I had only 100 request limit per month
        this.symbols = [
            'USD',
            'AED',
            'AFN',
            'ALL',
            'AMD',
            'ANG',
            'AOA',
            'ARS',
            'AUD',
            'AWG',
            'AZN',
            'BAM',
            'BBD',
            'BDT',
            'BGN',
            'BHD',
            'BIF',
            'BMD',
            'BND',
            'BOB',
            'BRL',
            'BSD',
            'BTC',
            'BTN',
            'BWP',
            'BYN',
            'BYR',
            'BZD',
            'CAD',
            'CDF',
            'CHF',
            'CLF',
            'CLP',
            'CNY',
            'COP',
            'CRC',
            'CUC',
            'CUP',
            'CVE',
            'CZK',
            'DJF',
            'DKK',
            'DOP',
            'DZD',
            'EGP',
            'ERN',
            'ETB',
            'EUR',
            'FJD',
            'FKP',
            'GBP',
            'GEL',
            'GGP',
            'GHS',
            'GIP',
            'GMD',
            'GNF',
            'GTQ',
            'GYD',
            'HKD',
            'HNL',
            'HRK',
            'HTG',
            'HUF',
            'IDR',
            'ILS',
            'IMP',
            'INR',
            'IQD',
            'IRR',
            'ISK',
            'JEP',
            'JMD',
            'JOD',
            'JPY',
            'KES',
            'KGS',
            'KHR',
            'KMF',
            'KPW',
            'KRW',
            'KWD',
            'KYD',
            'KZT',
            'LAK',
            'LBP',
            'LKR',
            'LRD',
            'LSL',
            'LTL',
            'LVL',
            'LYD',
            'MAD',
            'MDL',
            'MGA',
            'MKD',
            'MMK',
            'MNT',
            'MOP',
            'MRO',
            'MUR'
        ];
        // this.conversion.symbols().subscribe((response: any) => {
        //     this.symbols = response;
        // });
    }

    convert(): void {
        this.conversion.convert(this.formElement).subscribe((response) => {
            if (response.success) {
                this.formElement.convertedValue = `${response.result} ${response.query.to}`;
                this.formElement.rate = `1.00 ${response.query.from}=${response.info.rate} ${response.query.to}`;
            }
        });
    }
}
