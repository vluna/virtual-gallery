import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent} from "@angular/material/dialog";

@Component({
  selector: 'app-scene-details',
  templateUrl: './scene-details.component.html',
  styleUrls: ['./scene-details.component.css']
})
export class SceneDetailsComponent implements OnInit {
  artwork: any;

  constructor(
    private dialogRef: MatDialogRef<SceneDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { 
    console.log(data);
    this.artwork = data;
  }

  ngOnInit(): void {
  }
  
  close() {
    this.dialogRef.close();
  }
}