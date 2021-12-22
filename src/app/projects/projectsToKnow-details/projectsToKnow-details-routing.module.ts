import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProjectsToKnowDetailsComponent} from "./projectsToKnow-details.component";


const routes: Routes = [
  { path: '',
    component: ProjectsToKnowDetailsComponent }

];

@NgModule({

  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]

})
export class ProjectsToKnowDetailsRoutingModule {}

