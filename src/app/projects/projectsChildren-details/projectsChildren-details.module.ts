import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProjectsChildrenDetailsComponent} from "./projectsChildren-details.component";
import {ProjectsDetailsRoutingModule} from "./projectsChildren-details-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProjectsDetailsRoutingModule,
        MatFormFieldModule,
        MatTabsModule
    ],
  exports: [
    ProjectsChildrenDetailsComponent
  ],
  declarations: [ProjectsChildrenDetailsComponent]
})
export class ProjectsChildrenDetailsModule {}





