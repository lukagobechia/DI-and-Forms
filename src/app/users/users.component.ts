import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private reg: RegistrationService) { }

  Users: User[] = [];

  user = {
    LastName: '',
    FirstName: '',
    Username: '',
    Email: '',
    Password: '',
  }
  ngOnInit(): void {
    this.reg.setUser(this.user)
  }

  addUser() {
    this.reg.getUser();
    console.log(this.reg.Users);
  }

}
