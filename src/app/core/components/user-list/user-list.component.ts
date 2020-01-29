import { Component, OnInit, AfterViewInit, OnDestroy, OnChanges, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  @Input() users : Array<string> = [];
  @Output() selectedUser = new EventEmitter();
  userFirstName: string = "Genos";
  constructor() { }

  ngOnInit(){
    console.log(this.users);
  }
  ngAfterViewInit(){}
  ngOnDestroy(){}
  ngOnChanges(){}

  selectUser(){
    this.selectedUser.emit("user2");
  }
}
