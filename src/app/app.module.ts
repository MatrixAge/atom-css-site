import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './routes/home/home.component';
import { DocumentComponent } from './routes/document/document.component';

@NgModule({
      declarations: [
            AppComponent,
            HeaderComponent,
            FooterComponent,
            HomeComponent,
            DocumentComponent
      ],
      imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            HttpClientModule
      ],
      providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
      bootstrap: [AppComponent]
})
export class AppModule { }
