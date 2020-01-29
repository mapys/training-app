import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  listOfUsers = ["user1", "user2", "user3"];
  constructor() { }

  ngOnInit() {
  }

  selectedUser(user: string){
    console.log(user);
  }
}
