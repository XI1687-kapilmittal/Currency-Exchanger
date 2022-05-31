import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersInterceptor } from './interceptors/headers.interceptor';

@NgModule({
    declarations: [AppComponent],
    imports: [CommonModule, HttpClientModule, FormsModule, BrowserModule, AppRoutingModule],
    providers: [
        {
            multi: true,
            provide: HTTP_INTERCEPTORS,
            useClass: HeadersInterceptor
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
