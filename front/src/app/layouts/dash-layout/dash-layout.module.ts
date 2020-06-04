import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashLayoutRoutes } from './dash-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashLayoutRoutes),
    NgbModule,
    FormsModule
    // NgbModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashLayoutModule { }
