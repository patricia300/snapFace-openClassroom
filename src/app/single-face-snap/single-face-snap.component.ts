import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;

  isSnap!: boolean;
  titleButtonSnap!: string;

  constructor(private faceSnapService: FaceSnapsService,
              private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.prepareInterface();

    this.getFaceSnap();

  }

  onSnapClick():void {
    if (this.isSnap) {
      this.unsnap();
    } else {
      this.snap();
    }
  }

  unsnap(): void {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.isSnap = false;
    this.titleButtonSnap = "Oh Snap!";
  }

  snap(): void {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'snap');
    this.isSnap = true;
    this.titleButtonSnap = "Oops, unSnap!";
  }

  private prepareInterface() {
    this.isSnap = false;
    this.titleButtonSnap = "Oh Snap!";
  }

  private getFaceSnap() {
    const id = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(id);
  }
}
