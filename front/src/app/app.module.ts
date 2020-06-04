import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashLayoutComponent } from './layouts/dash-layout/dash-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { StockLayoutComponent } from './layouts/stock-layout/stock-layout.component';
import { SharedModule } from './shared/shared.module';
import { FournisseurLayoutComponent } from './layouts/fournisseur-layout/fournisseur-layout.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    DashLayoutComponent,
    StockLayoutComponent,
    FournisseurLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
