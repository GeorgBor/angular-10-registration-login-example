import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProjectsEducationDetailsComponent} from "./projectsEducation-details.component";
import {ProjectsEducationDetailsRoutingModule} from "./projectsEducation-details-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectsEducationDetailsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule
  ],
  exports: [
    ProjectsEducationDetailsComponent,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [ProjectsEducationDetailsComponent]
})
export class ProjectsEducationDetailsModule {}





