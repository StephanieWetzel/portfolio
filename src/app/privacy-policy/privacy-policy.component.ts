import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../landing-page/header/header.component';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink, HeaderComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  constructor(public lngService: LanguageService) {

  }
}
