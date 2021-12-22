import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProjectsChildrenDetailsComponent} from "./projectsChildren-details.component";


const routes: Routes = [
  { path: '',
    component: ProjectsChildrenDetailsComponent }

];

@NgModule({

  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]

})
export class ProjectsDetailsRoutingModule {}

