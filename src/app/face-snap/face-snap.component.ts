import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, NgClass, NgStyle, PercentPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    PercentPipe,
    CurrencyPipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  isSnap!: boolean;
  titleButtonSnap!: string;
  totalCost = 58.5;

  ngOnInit(): void {
    this.isSnap = false;
    this.titleButtonSnap = "Oh Snap!";

  }

  onSnapClick():void {
    if (this.isSnap) {
     this.unsnap();
    } else {
      this.snap();
    }
  }

  unsnap(): void {
    this.faceSnap.removeSnap();
    this.isSnap = false;
    this.titleButtonSnap = "Oh Snap!";
  }

  snap(): void {
    this.faceSnap.addSnap();
    this.isSnap = true;
    this.titleButtonSnap = "Oops, unSnap!";
  }
}
