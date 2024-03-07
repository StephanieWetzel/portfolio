import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'privacyPolicy', component: PrivacyPolicyComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: '**', redirectTo: '' }
];