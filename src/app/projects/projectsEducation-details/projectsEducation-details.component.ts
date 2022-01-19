import {Component, OnInit} from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'projectsEducation-details',
  templateUrl: './projectsEducation-details.component.html',
  styleUrls: ['./projectsEducation-details.component.css']
})
export class ProjectsEducationDetailsComponent{

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(amount: string){
    this.snackBar.open("Danke für ihre Spende! "+amount, "Okay!");

  }


}





