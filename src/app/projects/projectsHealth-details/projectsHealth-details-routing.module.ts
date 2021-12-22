import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProjectsHealthDetailsComponent} from "./projectsHealth-details.component";


const routes: Routes = [
  { path: '',
    component: ProjectsHealthDetailsComponent }

];

@NgModule({

  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]

})
export class ProjectsHealthDetailsRoutingModule {}

