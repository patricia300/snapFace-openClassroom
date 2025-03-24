import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from "./face-snap/face-snap.component";
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        "Angela et ses animés adorées",
        "This is a Face Snap component that displays a face snap.",
        "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        new Date(),
        59
      ),
      new FaceSnap(
        "Good bloody thing",
        "This is a Face Snap component that displays a face snap.",
        "https://plus.unsplash.com/premium_photo-1673859054724-d3ce699da39d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25vdyUyMG1vdW50YWlufGVufDB8fDB8fHww",
        new Date(),
        105
      ),
      new FaceSnap(
        "Delicious breakfast",
        "This is a Face Snap component that displays a face snap.",
        "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=",
        new Date(),
        68
      )
    ];

    this.faceSnaps[1].setLocation("Montagne Belledonne");
  }

}
