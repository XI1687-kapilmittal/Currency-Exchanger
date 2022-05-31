import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersInterceptor } from './interceptors/headers.interceptor';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [AppComponent, HomeComponent],
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
