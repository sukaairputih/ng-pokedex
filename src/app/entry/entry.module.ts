import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './../common/shared/shared.module';
import { EntryComponent } from './entry.component';

const routes: Routes = [
  { path: '', component: EntryComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    EntryComponent
  ]
})
export class EntryModule { }