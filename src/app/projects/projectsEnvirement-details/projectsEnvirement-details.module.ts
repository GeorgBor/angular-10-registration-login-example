import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProjectsEnvirementDetailsComponent} from "./projectsEnvirement-details.component";
import {ProjectsEnvirementDetailsRoutingModule} from "./projectsEnvirement-details-routing.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectsEnvirementDetailsRoutingModule
  ],
  exports: [
    ProjectsEnvirementDetailsComponent
  ],
  declarations: [ProjectsEnvirementDetailsComponent]
})
export class ProjectsEnvirementDetailsModule {}





