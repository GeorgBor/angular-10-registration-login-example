import {NgModule} from "@angular/core";
import {ContactsRoutingModule} from "./contacts-routing.module";
import {ContactsComponent} from "./contacts.component";



@NgModule({
  imports: [
    ContactsRoutingModule
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule {}





