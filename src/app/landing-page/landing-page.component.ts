import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AboveTheFoldComponent,
    AboutMeComponent,
    MySkillsComponent,
    MyProjectsComponent,
    ContactMeComponent,
    FooterComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  ngOnInit() {
    AOS.init({
      duration: 800,
      once: false,
    });
  }
}
