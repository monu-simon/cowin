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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtpComponent } from './ui/otp/otp.component';
import { StateService } from './services/stae.service';
import { CertificateComponent } from './ui/certificate/certificate.component';
import { ErrorDirective } from './ui/error.directive';
import { DateService } from './shared/date';
import { PincodeSearchComponent } from './ui/pincode-search/pincode-search.component';
import { VaccinatedDateService } from './shared/vaccinatedDate';
import { LoginappComponent } from './ui/loginapp/loginapp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSliderModule} from '@angular/material/slider'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import { CardComponentComponent } from './shared/card-component/card-component/card-component.component'
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { SignupComponent } from './ui/signup/signup.component';
import { UserHomeComponent } from './ui/user-home/user-home.component';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/compat/auth'
import { environment } from 'src/environments/environment.prod';
import {MatMenuModule} from '@angular/material/menu';
import { AccessDeniedComponent } from './ui/access-denied/access-denied.component';




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
    LoginappComponent,
    CardComponentComponent,
    SignupComponent,
    UserHomeComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatMenuModule
  ],
  providers: [
    StateService,
    DateService,
    VaccinatedDateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
