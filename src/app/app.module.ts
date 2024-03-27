import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { UtilsModule } from 'src/utils/utils.module';
import { AppointmentComponent } from './appointment/appointment.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { PatientIdGeneratorComponent } from './patient-id-generator/patient-id-generator.component';
import { PatientchartComponent } from './patientchart/patientchart.component';
import { AppointmentChartComponent } from './appointment-chart/appointment-chart.component';
import { ReportsComponent } from './reports/reports.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AppointmentComponent,
    RegisterComponent,
    PatientIdGeneratorComponent,
    PatientchartComponent,
    AppointmentChartComponent,
    ReportsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilsModule,
    FormsModule,
    HttpClientModule,
        
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
