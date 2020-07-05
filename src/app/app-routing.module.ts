import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { TreatmentsComponent } from './components/treatments/treatments.component';
import { RegisterComponent } from './components/register/register.component';
import { FreehoursComponent } from './components/freehours/freehours.component';
import { MyVisitsComponent } from './user/patient/my-visits/my-visits.component';
import { VisitDetailsComponent } from './user/patient/visit-details/visit-details.component';
import { MakeVisitComponent } from './user/patient/make-visit/make-visit.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { UsersComponent } from './admin/users/users.component';
import { AddTreatmentComponent } from './admin/add-treatment/add-treatment.component';
import { MenuBarComponent } from './user/menu-bar/menu-bar.component';
import { TreatmentsAdminComponent } from './admin/treatments-admin/treatments-admin.component';
import { VisitsComponent } from './admin/visits/visits.component';
import { CalendarComponent } from './admin/calendar/calendar.component';
import { AddingHoursComponent } from './admin/adding-hours/adding-hours.component';
import { CardsHistoryComponent } from './user/patient/cards-history/cards-history.component';
import { AvailableReservedComponent } from './components/available-reserved/available-reserved.component';

const routes: Routes = [
  {path : '',component : WelcomeComponent},
  {path : 'doctors',component : DoctorsComponent},
  {path : 'menu',component : MenuComponent},
  {path : 'login',component : LoginComponent},
  {path : 'contact',component : ContactComponent},
  {path : 'services',component : TreatmentsComponent},
  {path : 'register',component : RegisterComponent},
  {path : 'freeHours',component : FreehoursComponent},
  {path : 'welcome',component : WelcomeComponent},
  {path:'treatments',component:TreatmentsComponent},
  {path:'myvisits',component:MyVisitsComponent},
  {path:'visitdetails/:id',component:VisitDetailsComponent},
 {path:'bookvisit',component:MakeVisitComponent},
 {path:'adduser',component:AddUserComponent},
 {path:'users',component:UsersComponent},
 {path:'addTreatment',component:AddTreatmentComponent},
 {path:'menu-bar',component:MenuBarComponent},
 {path:'admin-treatment',component:TreatmentsAdminComponent},
 {path:'visits',component:VisitsComponent},
 {path:'calendar',component:CalendarComponent},
 {path:'add-hours',component:AddingHoursComponent},
 {path : 'healthcards/:id',component:CardsHistoryComponent},
 {path : 'details/:day',component:AvailableReservedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
