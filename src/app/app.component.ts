import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})


export class AppComponent {
    user: User;


    myScriptElement: HTMLScriptElement;


    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
        this.myScriptElement = document.createElement("script");
        this.myScriptElement.src = "server.js";
        document.body.appendChild(this.myScriptElement);
    }

    logout() {
        this.accountService.logout();
    }

    //-----------------------------------------------------------------------------------





}
