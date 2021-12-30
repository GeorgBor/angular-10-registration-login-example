import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProjectsDiversityDetailsComponent} from "./projectsDiversity-details.component";
import {ProjectsDiversityDetailsRoutingModule} from "./projectsDiversity-details-routing.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectsDiversityDetailsRoutingModule
  ],
  exports: [
    ProjectsDiversityDetailsComponent
  ],
  declarations: [ProjectsDiversityDetailsComponent]
})
export class ProjectsDiversityDetailsModule {}





