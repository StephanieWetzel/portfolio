
import { CommonModule, NgIf, NgClass, NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, NgIf, NgClass, NgStyle, RouterLink],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  http = inject(HttpClient);

  formData: FormGroup = this.fbuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(4)]],
    checkbox: [false, Validators.requiredTrue]
  });



  constructor(private fbuilder: FormBuilder, public lngService: LanguageService) {

  }


  post = {
    endPoint: 'https://stephanie-wetzel.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  onSubmit() {
    if (this.formData.valid) {
      const formDataAsJSON = this.formData.getRawValue();
      const formDataAsJSONString = JSON.stringify(formDataAsJSON);

      this.http.post(this.post.endPoint, formDataAsJSONString)
        .subscribe({
          next: (_response: any) => {
            this.formData.reset();
          },
          error: (error: any) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }


  openPolicy() {

  }
}