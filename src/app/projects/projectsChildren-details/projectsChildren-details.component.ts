import {Component, inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'projectsChildren-details',
  templateUrl: './projectsChildren-details.component.html',
  styleUrls: ['./projectsChildren-details.component.css']
})
export class ProjectsChildrenDetailsComponent {
/*
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog,
      { width: '250px', data: {name: this.name, animal: this.animal} } );

  }

*/
}
/*
@Component({
  selector: 'projectsChildren-details-dialog',
  templateUrl: 'projectsChildren-details-dialog.html',
})

export class DialogOverviewExampleDialog {

  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
              @inject(MAT_DIALOG_DATA) public data: DialogData ) {}

  onNoClick(): void{
    this.dialogRef.close();
  }

}*/





