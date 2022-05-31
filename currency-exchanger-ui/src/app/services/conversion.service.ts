import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ConversionService {
    constructor(private http: HttpClient) {}

    convert(formElement: any) {
        const url = `https://api.apilayer.com/fixer/convert?to=${formElement.to}&amount=${formElement.amount}&from=${formElement.from}`;
        return this.http.get<any>(url);
    }
}
