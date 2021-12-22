import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProjectsEducationDetailsComponent} from "./projectsEducation-details.component";


const routes: Routes = [
  { path: '',
    component: ProjectsEducationDetailsComponent }

];

@NgModule({

  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]

})
export class ProjectsEducationDetailsRoutingModule {}

