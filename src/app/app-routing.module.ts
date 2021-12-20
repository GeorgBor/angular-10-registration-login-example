import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import {ProjectsComponent} from "@app/projects/projects.component";

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const projectsModule = () => import('./projects/projects.module').then(m => m.ProjectsModule);
const contactsModule = () => import('./contacts/contacts.module').then(m => m.ContactsModule);

const routes: Routes = [
    { path: 'projects', loadChildren: projectsModule },
    { path: 'contacts', loadChildren: contactsModule },
  //----------------------------------------
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
