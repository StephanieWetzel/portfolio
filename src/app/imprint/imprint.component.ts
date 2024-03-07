import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { HeaderComponent } from '../landing-page/header/header.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  constructor(public lngService: LanguageService) {

  }
}
