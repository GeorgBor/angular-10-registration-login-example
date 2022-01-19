import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProjectsEducationDetailsComponent} from "./projectsEducation-details.component";
import {ProjectsEducationDetailsRoutingModule} from "./projectsEducation-details-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectsEducationDetailsRoutingModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    ProjectsEducationDetailsComponent
  ],
  declarations: [ProjectsEducationDetailsComponent]
})
export class ProjectsEducationDetailsModule {}





