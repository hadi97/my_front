import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TreatmentsComponent } from './components/treatments/treatments.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { MyVisitsComponent } from './user/patient/my-visits/my-visits.component';
import { MakeVisitComponent } from './user/patient/make-visit/make-visit.component';
import { FreehoursComponent } from './components/freehours/freehours.component';
import { VisitDetailsComponent } from './user/patient/visit-details/visit-details.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { VisitsComponent } from './admin/visits/visits.component';
import { AddTreatmentComponent } from './admin/add-treatment/add-treatment.component';
import { UsersComponent } from './admin/users/users.component';
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { MenuBarComponent } from './user/menu-bar/menu-bar.component';
import { TreatmentsAdminComponent } from './admin/treatments-admin/treatments-admin.component';
import { AddingHoursComponent } from './admin/adding-hours/adding-hours.component';
import { CalendarComponent } from './admin/calendar/calendar.component';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatNativeDateModule } from "@angular/material"
  import {MatDatepickerModule} from '@angular/material/datepicker';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CardsHistoryComponent } from './user/patient/cards-history/cards-history.component';
import { AvailableReservedComponent } from './components/available-reserved/available-reserved.component';
import { FilterPipe } from './components/filter.pipe';
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
  {path:'visitDetails/:id',component:VisitDetailsComponent},
 {path:'makeVisit',component:MakeVisitComponent},
 {path:'addUser',component:AddUserComponent},
 {path:'users',component:UsersComponent},
 {path:'addTreatment',component:AddTreatmentComponent},
 {path:'menu-bar',component:MenuBarComponent},
 {path:'admin-treatment',component:TreatmentsAdminComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    WelcomeComponent,
    RegisterComponent,
    LoginComponent,
    TreatmentsComponent,
    DoctorsComponent,
    ContactComponent,
    MenuComponent,
    MyVisitsComponent,
    MakeVisitComponent,
    FreehoursComponent,
    VisitDetailsComponent,
    AddUserComponent,
    MenuAdminComponent,
    VisitsComponent,
    AddTreatmentComponent,
    UsersComponent,
    AdminContentComponent,
    MenuBarComponent,
    TreatmentsAdminComponent,
    AddingHoursComponent,
    CalendarComponent,
    CardsHistoryComponent,
    AvailableReservedComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FilterPipe
  ]
})
export class AppModule { }
