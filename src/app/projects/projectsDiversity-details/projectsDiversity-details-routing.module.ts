import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProjectsDiversityDetailsComponent} from "./projectsDiversity-details.component";


const routes: Routes = [
  { path: '',
    component: ProjectsDiversityDetailsComponent }

];

@NgModule({

  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]

})
export class ProjectsDiversityDetailsRoutingModule {}

