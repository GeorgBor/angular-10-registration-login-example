import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProjectsHealthDetailsComponent} from "./projectsHealth-details.component";
import {ProjectsHealthDetailsRoutingModule} from "./projectsHealth-details-routing.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectsHealthDetailsRoutingModule
  ],
  exports: [
    ProjectsHealthDetailsComponent
  ],
  declarations: [ProjectsHealthDetailsComponent]
})
export class ProjectsHealthDetailsModule {}





