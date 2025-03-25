import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps : FaceSnap[] =  [
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
    ).withLocation("Montagne Belledonne"),
    new FaceSnap(
      "Delicious breakfast",
      "This is a Face Snap component that displays a face snap.",
      "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=",
      new Date(),
      68
    )
  ];

  getFaceSnaps() : FaceSnap[]{
    return [...this.faceSnaps];
  }

  snapFaceSnapById(id: string, snapType: SnapType): void {
    const faceSnap = this.getFaceSnapById(id);
    faceSnap.snap(snapType);
  }

  getFaceSnapById (id: string): FaceSnap {
    const faceSnapFound = this.faceSnaps.find(faceSnap => faceSnap.id === id);
    if(!faceSnapFound){
      throw new Error('FaceSnap not found');
    }
    return faceSnapFound;
}
}
