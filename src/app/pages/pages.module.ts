import { NgModule } from "@angular/core";
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from "@angular/forms";

// ng2 - charts
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


//    temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';

@NgModule({
     declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        AccoutSettingsComponent
     ],
     exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
     ],
     imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
     ]
})
export class PagesModule { }
