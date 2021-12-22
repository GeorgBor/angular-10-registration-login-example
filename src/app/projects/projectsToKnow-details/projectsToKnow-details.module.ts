import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProjectsToKnowDetailsComponent} from "./projectsToKnow-details.component";
import {ProjectsToKnowDetailsRoutingModule} from "./projectsToKnow-details-routing.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectsToKnowDetailsRoutingModule
  ],
  exports: [
    ProjectsToKnowDetailsComponent
  ],
  declarations: [ProjectsToKnowDetailsComponent]
})
export class ProjectsToKnowDetailsModule {}





