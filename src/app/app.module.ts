import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from "@angular/material";

import { SharedModule } from './common/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    NgbModalModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
