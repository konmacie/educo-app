import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractInputComponent } from './components/forms/abstract-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputErrorsComponent } from './components/forms/input-errors.component';
import { TextInputComponent } from './components/forms/text-input/text-input.component';
import { TextareaInputComponent } from './components/forms/textarea-input/textarea-input.component';
import { PasswordInputComponent } from './components/forms/password-input/password-input.component';

const declarations = [
  InputErrorsComponent,
  TextInputComponent,
  TextareaInputComponent,
  PasswordInputComponent,
];

const imports = [FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, ...imports],
  exports: [...imports, ...declarations],
})
export class SharedModule {}
