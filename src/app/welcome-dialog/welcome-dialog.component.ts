import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-welcome-dialog',
  templateUrl: './welcome-dialog.component.html',
  styleUrls: ['./welcome-dialog.component.scss']
})
export class WelcomeDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<WelcomeDialogComponent>) { }

  ngOnInit() {
  }

  public close(): void {
    this.dialogRef.close();
  }
}
