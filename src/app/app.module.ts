import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HomeComponent } from './ui/home/home.component';
import { CasesCountryComponent } from './ui/cases-country/cases-country.component';
import { VaccineDetailsComponent } from './ui/vaccine-details/vaccine-details.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './ui/login/login.component';
import { FormsModule } from '@angular/forms';
import { OtpComponent } from './ui/otp/otp.component';
import { StateService } from './services/stae.service';
import { CertificateComponent } from './ui/certificate/certificate.component';
import { ErrorDirective } from './ui/error.directive';
import { DateService } from './shared/date';
import { PincodeSearchComponent } from './ui/pincode-search/pincode-search.component';
import { VaccinatedDateService } from './shared/vaccinatedDate';
import { LoginappComponent } from './ui/loginapp/loginapp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CasesCountryComponent,
    VaccineDetailsComponent,
    LoginComponent,
    OtpComponent,
    CertificateComponent,
    ErrorDirective,
    PincodeSearchComponent,
    LoginappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    StateService,
    DateService,
    VaccinatedDateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
