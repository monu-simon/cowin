import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from './services/route-guard.service';
import { CasesCountryComponent } from './ui/cases-country/cases-country.component';
import { CertificateComponent } from './ui/certificate/certificate.component';
import { HomeComponent } from './ui/home/home.component';
import { LoginComponent } from './ui/login/login.component';
import { LoginappComponent } from './ui/loginapp/loginapp.component';
import { OtpComponent } from './ui/otp/otp.component';
import { PincodeSearchComponent } from './ui/pincode-search/pincode-search.component';
import { VaccineDetailsComponent } from './ui/vaccine-details/vaccine-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'bookk', component: VaccineDetailsComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'world', component: CasesCountryComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'login', component: LoginComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'otp', component: OtpComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'certificate', component: CertificateComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'pin', component: PincodeSearchComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'admin', component: LoginappComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
