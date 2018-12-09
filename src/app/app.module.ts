import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { BrowseComponent } from './browse/browse.component';
import { ProfileComponent } from './profile/profile.component';
import { VendorComponent } from './vendor/vendor.component';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieComponent } from './movie/movie.component';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { BookingsComponent } from './bookings/bookings.component';
import { AdminMovieDashboardComponent } from './admin-movie-dashboard/admin-movie-dashboard.component';
import { AdminUsersDashboardComponent } from './admin-users-dashboard/admin-users-dashboard.component';
import {ButtonModule} from 'primeng/button';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
import { BookingComponent } from './booking/booking.component';
import { UsherComponent } from './usher/usher.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin/users', component: AdminUsersDashboardComponent },
  { path: 'admin/movies', component: AdminMovieDashboardComponent },
  { path: 'vendor', component: VendorComponent },
  { path: 'usher', component: UsherComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'movie', component: MovieComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    BrowseComponent,
    ProfileComponent,
    VendorComponent,
    MovieComponent,
    BookingsComponent,
    AdminMovieDashboardComponent,
    AdminUsersDashboardComponent,
    MovieDescriptionComponent,
    BookingComponent,
    UsherComponent
  ],
  imports: [
    BrowserModule,
    ToastModule,
    DataViewModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    HttpModule,
    DropdownModule,
    TableModule,
    DialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [UserService, CookieService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
