import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './componnets/dashboard/dashboard.component';
import { ClientsComponent } from './componnets/clients/clients.component';
import { ClientDetailsComponent } from './componnets/client-details/client-details.component';
import { AddClientComponent } from './componnets/add-client/add-client.component';
import { EditClientComponent } from './componnets/edit-client/edit-client.component';
import { NavbarComponent } from './componnets/navbar/navbar.component';
import { SidebarComponent } from './componnets/sidebar/sidebar.component';
import { PageNotFoundComponent } from './componnets/page-not-found/page-not-found.component';
import { LoginComponent } from './componnets/login/login.component';
import { RegisterComponent } from './componnets/register/register.component';
import { SettingsComponent } from './componnets/settings/settings.component';


const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },

]
@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        ClientsComponent,
        ClientDetailsComponent,
        AddClientComponent,
        EditClientComponent,
        NavbarComponent,
        SidebarComponent,
        PageNotFoundComponent,
        LoginComponent,
        RegisterComponent,
        SettingsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
