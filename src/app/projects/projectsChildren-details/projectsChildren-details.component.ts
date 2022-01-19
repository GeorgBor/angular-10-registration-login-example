import {Component, Inject} from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'projectsChildren-details',
  templateUrl: './projectsChildren-details.component.html',
  styleUrls: ['./projectsChildren-details.component.css']
})
export class ProjectsChildrenDetailsComponent {

  constructor(private matSnackBar: MatSnackBar) {  }

  openSnackBar(amount: string) {
    this.matSnackBar.open("Danke für ihre Spende! "+amount, "Okay!");

  }


}







