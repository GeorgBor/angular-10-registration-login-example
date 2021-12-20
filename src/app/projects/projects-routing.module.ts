import {NgModule} from "@angular/core";
import {Routes, RouterModule } from "@angular/router";

import {ProjectsComponent} from "./projects.component";

import {AuthGuard} from "../_helpers";
import {HomeComponent} from "../home";
import {ContactsComponent} from "../contacts/contacts.component";
import {ProjectsDetailsComponent} from "./projects-details/projects-details.component";


const projectsDetailsModule = () => import('./projects-details/projects-details.module').then(x => x.ProjectsDetailsModule);


const routes: Routes = [
  { path: '', component: ProjectsComponent, children: [
      { path: 'projects-details', loadChildren: projectsDetailsModule, canActivate: [AuthGuard] },


    ]
  },
  //Projects instead Projects/projects-details
  { path: '', redirectTo: 'projects', pathMatch: 'Full' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ],
})
export class ProjectsRoutingModule {}
