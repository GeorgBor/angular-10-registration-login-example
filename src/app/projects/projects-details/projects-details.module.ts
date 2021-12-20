import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProjectsDetailsComponent} from "./projects-details.component";
import {ProjectsDetailsRoutingModule} from "./projects-details-routing.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectsDetailsRoutingModule
  ],
  exports: [
    ProjectsDetailsComponent
  ],
  declarations: [ProjectsDetailsComponent]
})
export class ProjectsDetailsModule {}





