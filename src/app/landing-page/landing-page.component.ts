import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor( private router : Router) { }

  onClickVersSnapFace(): void {
    this.router.navigateByUrl('facesnaps');
    console.log('Vers Snap Face');
  }

}
