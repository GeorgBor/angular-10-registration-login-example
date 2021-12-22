import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProjectsEducationDetailsComponent} from "./projectsEducation-details.component";
import {ProjectsEducationDetailsRoutingModule} from "./projectsEducation-details-routing.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectsEducationDetailsRoutingModule
  ],
  exports: [
    ProjectsEducationDetailsComponent
  ],
  declarations: [ProjectsEducationDetailsComponent]
})
export class ProjectsEducationDetailsModule {}





