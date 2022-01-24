import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProjectsRoutingModule} from "./projects-routing.module";
import {ProjectsComponent} from "./projects.component";
import {FormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
    imports: [
        CommonModule,
        ProjectsRoutingModule,
        FormsModule,
        MatGridListModule,
        MatButtonModule,
        MatFormFieldModule
    ],
  declarations: [
    ProjectsComponent

  ]
})
export class ProjectsModule {}
