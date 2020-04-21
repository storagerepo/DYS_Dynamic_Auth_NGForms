import { NgModule } from '@angular/core';
import { NgFormLibraryComponent } from './ng-form-library.component';
import { FormGeneratorComponent } from './form-generator/form-generator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';

@NgModule({
  declarations: [NgFormLibraryComponent, FormGeneratorComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlatpickrModule.forRoot()
  ],
  exports: [NgFormLibraryComponent,FormGeneratorComponent]
})
export class NgFormLibraryModule { }
