import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

  validationMessages = {
    username: [
      {type:"required", message: "Please enter a username."},
      {type:"pattern", message:"The username must be at least 5 characters."}
    ],
    email: [
      {type:"required", message: "Please enter your Email-address."},
      {type:"pattern", message: "The Email-address is incorrect. Please try again."}
    ],
    password: [
      {type: "required", message: "Please enter your password."},
      {type: "minlength", message: "The password must be at least 6 characters."}
    ]
  }
  validationFormUser: FormGroup;
  loading: any;

}
