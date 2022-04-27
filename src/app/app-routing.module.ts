import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RouteGuardService } from './services/route-guard.service';
import { CasesCountryComponent } from './ui/cases-country/cases-country.component';
import { CertificateComponent } from './ui/certificate/certificate.component';
import { HomeComponent } from './ui/home/home.component';
import { LoginComponent } from './ui/login/login.component';
import { LoginappComponent } from './ui/loginapp/loginapp.component';
import { OtpComponent } from './ui/otp/otp.component';
import { PincodeSearchComponent } from './ui/pincode-search/pincode-search.component';
import { SignupComponent } from './ui/signup/signup.component';
import { UserHomeComponent } from './ui/user-home/user-home.component';
import { VaccineDetailsComponent } from './ui/vaccine-details/vaccine-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'bookk', component: VaccineDetailsComponent,
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'world', component: CasesCountryComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'otp', component: OtpComponent,
  },
  {
    path: 'certificate', component: CertificateComponent,
  },
  {
    path: 'pin', component: PincodeSearchComponent,
  },
  {
    path: 'admin', component: LoginappComponent
  },
  {
    path: 'signup', component: SignupComponent
  }, 
  {
    path: 'userhome',component: UserHomeComponent, canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
