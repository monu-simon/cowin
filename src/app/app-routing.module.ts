import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesCountryComponent } from './ui/cases-country/cases-country.component';
import { CertificateComponent } from './ui/certificate/certificate.component';
import { HomeComponent } from './ui/home/home.component';
import { LoginComponent } from './ui/login/login.component';
import { OtpComponent } from './ui/otp/otp.component';
import { PincodeSearchComponent } from './ui/pincode-search/pincode-search.component';
import { VaccineDetailsComponent } from './ui/vaccine-details/vaccine-details.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {path:'bookk',component:VaccineDetailsComponent},
  {path:'home',component:HomeComponent},
  {path:'world',component:CasesCountryComponent},
  {path:'login',component:LoginComponent},
  {path:'otp/:id',component:OtpComponent},
  {path:'certificate',component:CertificateComponent},
  {path:'pin',component:PincodeSearchComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
