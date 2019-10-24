import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxNavDrawerModule } from '@ngx-lite/nav-drawer';
import { NgxModalModule } from '@ngx-lite/modal';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { FormEntryComponent } from './components/form-entry/form-entry.component';

const components = [
  HeaderComponent,
  FooterComponent,
  FormSearchComponent,
  FormEntryComponent
];

const modules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  NgxNavDrawerModule,
  NgxModalModule
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules
  ],
  declarations: [...components]
})
export class SharedModule { }
