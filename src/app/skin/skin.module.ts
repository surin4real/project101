import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdToolbarModule, MdDatepickerModule, MdTabsModule, MdButtonModule, MdSelectModule, MdInputModule, MdNativeDateModule, MdIconModule, MdCheckboxModule, MdSidenavModule, MdListModule, MdGridListModule,MdMenuModule, MdCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdInputModule, MdTabsModule, MdDatepickerModule, MdSelectModule, MdToolbarModule, MdNativeDateModule,  MdIconModule, MdSidenavModule, MdListModule, MdGridListModule, MdMenuModule, MdCardModule
  ],
  exports: [ BrowserAnimationsModule, MdDatepickerModule, MdTabsModule, MdInputModule, MdButtonModule, MdSelectModule, MdNativeDateModule, MdCheckboxModule, MdIconModule,  MdToolbarModule, MdSidenavModule, MdListModule, MdGridListModule, MdMenuModule, MdCardModule],
  declarations: []
})
export class SkinModule { }
