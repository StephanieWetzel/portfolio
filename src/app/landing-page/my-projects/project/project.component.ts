import { CommonModule, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, NgStyle],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  items: string | any;

  @Input() i: number = 0;
  @Input() imgPath: string = '';
  @Input() name: string = '';
  @Input() language: string = '';
  @Input() description: string = '';
  @Input() live: string = '';
  @Input() github: string = '';


  ngAfterViewInit() {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }


  getAosAnimation(index: number): string {
    return index % 2 === 0 ? 'flip-left' : 'flip-right';
  }

}
