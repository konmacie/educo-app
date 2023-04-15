import { Component } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input.component';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styles: [],
})
export class TextInputComponent extends AbstractInputComponent<string> {}
