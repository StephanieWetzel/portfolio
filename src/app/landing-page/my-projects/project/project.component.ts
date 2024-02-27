import { CommonModule, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, NgStyle],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  @Input() i: number = 0;
  @Input() imgPath: string = '';
  @Input() name: string = '';
  @Input() language: string = '';
  @Input() description: string = '';
  @Input() live: string = '';
  @Input() github: string = '';


  constructor() {

  }
}
