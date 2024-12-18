import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { BaseDynamicControl } from '../base';

@Component({
  selector: 'lib-input',
  imports: [InputText, ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  standalone: true,
})
export class InputComponent extends BaseDynamicControl implements OnInit {
  ngOnInit() {
    console.log(this.config.config.type === 'number');
  }
}
