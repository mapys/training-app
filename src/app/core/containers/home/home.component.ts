import { User } from './../../../shared/models/User';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  user1:User = {
    firstName: 'Mapy',
    lastName: 'Sebastian',
    middleName: 'Yalong',
    age: 29,
    activeUser: true
  }

  user2:User = {
    firstName: 'Mark',
    lastName: 'Sebastian',
    age: 22,
    activeUser: false
  }
  
  listOfUsers: Array<User> = [this.user1, this.user2];
  
  constructor() { }

  ngOnInit() {
  }

  selectedUser(user: User){
    console.log(user);
  }

  getFormValue(user: User){
    console.log(user);
  }
}
