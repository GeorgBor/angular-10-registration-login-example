import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProjectsRoutingModule} from "./projects-routing.module";
import {ProjectsComponent} from "./projects.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ],
  declarations: [
    ProjectsComponent,

  ]
})
export class ProjectsModule {}
