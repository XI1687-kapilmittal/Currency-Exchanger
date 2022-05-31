import { Component } from '@angular/core';
import { ConversionService } from './services/conversion.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'currency-exchanger-ui';
    formElement = {
        amount: '',
        from: 'EUR',
        to: 'USD',
        convertedValue: '',
        rate: ''
    };

    constructor(private conversion: ConversionService) {}

    showButton() {
        this.conversion.convert(this.formElement).subscribe((response) => {
            if (response.success) {
                this.formElement.convertedValue = `${response.result} ${response.query.to}`;
                this.formElement.rate = `1.00 ${response.query.from}=${response.info.rate} ${response.query.to}`;
            }
        });
    }
}
