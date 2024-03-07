import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('overlayContainer') overlayContainer: ElementRef | any;

  overlay: ElementRef | any;

  aboutMe: boolean = false;
  skills: boolean = false;
  portfolio: boolean = false;
  contact: boolean = false;
  isEnLang: boolean = true;
  isGerLang: boolean = false;


  constructor(public lngService: LanguageService) {

  }


  toggleLinkStyle(category: string) {
    this.aboutMe = category === 'aboutMe';
    this.skills = category === 'skills';
    this.portfolio = category === 'portfolio';
    this.contact = category === 'contact';
  }


  initializeVariable() {
    this.overlay = this.overlayContainer.nativeElement;
  }


  showOverlay() {
    this.initializeVariable();
    this.overlay.style.width = '100%';
    this.overlay.style.opacity = '1';
    this.overlay.style.visibility = 'visible';
  }


  hideOverlay() {
    this.initializeVariable();
    this.overlay.style.width = '0%';
    this.overlay.style.opacity = '0';
    this.overlay.style.visibility = 'hidden';
  }


  changeLang(lng: string) {
    this.lngService.changeLang(lng);
    this.isEnLang = lng === 'en';
    this.isGerLang = lng === 'de';
  }
}