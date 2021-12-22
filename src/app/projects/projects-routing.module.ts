import {NgModule} from "@angular/core";
import {Routes, RouterModule } from "@angular/router";

import {ProjectsComponent} from "./projects.component";

import {AuthGuard} from "../_helpers";
import { HomeComponent} from "../home";
import { ContactsComponent} from "../contacts/contacts.component";
import { ProjectsChildrenDetailsComponent} from "./projectsChildren-details/projectsChildren-details.component";


const projectsChildrenDetailsModule = () => import('./projectsChildren-details/projectsChildren-details.module').then(x => x.ProjectsChildrenDetailsModule);
const projectsEducationDetailsModule = () => import('./projectsEducation-details/projectsEducation-details.module').then(x => x.ProjectsEducationDetailsModule);
const projectsHealthDetailsModule = () => import('./projectsHealth-details/projectsHealth-details.module').then(x => x.ProjectsHealthDetailsModule);
const projectsToKnowDetailsModule = () => import('./projectsToKnow-details/projectsToKnow-details.module').then(x => x.ProjectsToKnowDetailsModule);

const routes: Routes = [
  { path: '', component: ProjectsComponent, children: [
      { path: 'projects-details1', loadChildren: projectsChildrenDetailsModule, canActivate: [AuthGuard] },
      { path: 'projects-details2', loadChildren: projectsEducationDetailsModule, canActivate: [AuthGuard] },
      { path: 'projects-details3', loadChildren: projectsHealthDetailsModule, canActivate: [AuthGuard] },
      { path: 'projects-details4', loadChildren: projectsToKnowDetailsModule, canActivate: [AuthGuard] },


    ]
  },
  //Projects instead Projects/projectsChildren-details
  { path: '', redirectTo: 'projects', pathMatch: 'Full' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ],
})
export class ProjectsRoutingModule {}
