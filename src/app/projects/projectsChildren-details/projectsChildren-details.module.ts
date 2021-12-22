import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProjectsChildrenDetailsComponent} from "./projectsChildren-details.component";
import {ProjectsDetailsRoutingModule} from "./projectsChildren-details-routing.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectsDetailsRoutingModule
  ],
  exports: [
    ProjectsChildrenDetailsComponent
  ],
  declarations: [ProjectsChildrenDetailsComponent]
})
export class ProjectsChildrenDetailsModule {}





