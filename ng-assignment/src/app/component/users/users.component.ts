import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users:User[]=[
    {name:'abc', username:'abc02', email:'abc@y.com'},
    {name:'def', username:'def02', email:'def@y.com'},
    {name:'ghi', username:'ghi02', email:'ghi@y.com'},
    {name:'jkl', username:'jkl02', email:'jkl@y.com'},
    {name:'mno', username:'mno02', email:'mno@y.com'},
    {name:'pqr', username:'pqr02', email:'pqr@y.com'},
    {name:'stu', username:'stu02', email:'stu@y.com'},
    {name:'vwx', username:'vwx02', email:'vwx@y.com'},
    {name:'xyz', username:'xyz02', email:'xyz@y.com'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

