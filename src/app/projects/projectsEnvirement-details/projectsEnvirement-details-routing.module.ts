import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProjectsEnvirementDetailsComponent} from "./projectsEnvirement-details.component";


const routes: Routes = [
  { path: '',
    component: ProjectsEnvirementDetailsComponent }

];

@NgModule({

  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]

})
export class ProjectsEnvirementDetailsRoutingModule {}

